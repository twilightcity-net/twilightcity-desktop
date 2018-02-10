const { dialog } = require("electron"),
  log = require("electron-log"),
  cleanStack = require("clean-stack"),
  request = require("superagent");

//
// class used to manage all of the DataStores and data loading / commit
//
class DataStoreClient {
  constructor() {
    log.info("[DataStoreClient] created -> okay");
  }

  makeStoreRequest(store, callback) {
    log.info(
      "[DataStoreClient] make store request -> " +
        store.requestType +
        " : " +
        store.name
    );
    let client = new DataClient(store, callback);
    client.doRequest();
  }

  /// enum class of all of http requests
  static get Types() {
    return {
      POST: "post"
    };
  }
}

//
// class used to manage the client request
//
class DataClient {
  constructor(store, callback) {
    log.info("[DataStoreClient] |> create data client");
    this.store = store;
    this.urn = store.urn;
    this.type = store.requestType;
    this.callback = callback;
  }

  doRequest() {
    let url = global.App.api + this.urn;
    log.info("[DataStoreClient] |> do request -> " + url);
    if (DataStoreClient.Types.POST === this.type) {
      request
        .post(url)
        .retry(3)
        .timeout({
          response: 10000,
          deadline: 60000
        })
        .send(this.store.dto)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          log.info("[DataStoreClient] |> request complete -> " + url);
          this.store.timestamp = new Date().getTime();
          try {
            if (err) throw new Error(err);
            this.store.data = res.body;
          } catch (e) {
            this.store.error = e.toString();
            log.error(
              "[DataStoreClient] |> Connection Error -> " +
                this.type +
                " " +
                url +
                " : " +
                err +
                "\n\n" +
                err.stack +
                "\n"
            );
          } finally {
            log.info(
              "[DataStoreClient] └> dispatch request callback -> " + url
            );
            this.callback(this.store);
          }
        });
    } else {
      log.error(
        "[DataStoreClient] └> Unknown Request Type -> " + this.type + " " + url
      );
      dialog.showErrorBox(
        "Torchie",
        "Unknown Request Type -> " + this.type + " " + url
      );
    }
  }
}

//
// class exports for browserify
//
module.exports = {
  DataStoreClient,
  DataClient
};

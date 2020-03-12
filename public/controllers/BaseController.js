const log = require("electron-log"),
  chalk = require("chalk"),
  Util = require("../Util"),
  { DtoClient } = require("../managers/DtoClientFactory");

/**
 * This class is used to coordinate controllers across the app classes
 * @type {BaseController}
 */
module.exports = class BaseController {
  /**
   * REST paths for our grid server. good place to store thats shared amoung all controllers
   * @returns {{STATUS: string, PARTICIPATING: string, ACTIVE: string, SEPARATOR: string, TASKREF: string, DO_IT_LATER: string, JOURNAL: string, INTENTION: string, TEAM: string, STATUS_TEAM: string, CIRCUIT: string}}
   * @constructor
   */
  static get Paths() {
    return {
      JOURNAL: "/journal/",
      TEAM: "/team",
      SEPARATOR: "/",
      STATUS: "/status/",
      STATUS_TEAM: "/status/team",
      INTENTION: "/intention",
      TASKREF: "/taskref",
      CIRCUIT: "/circuit/",
      CIRCUIT_WTF: "/circuit/wtf",
      PARTICIPATING: "/participating",
      DO_IT_LATER: "/doitlater",
      ACTIVE: "/active",
      WTF: "wtf/"
    };
  }

  /**
   * various request parameter strings our controllers use
   * @returns {{LIMIT: string}}
   * @constructor
   */
  static get Params() {
    return {
      LIMIT: "?limit="
    };
  }

  /**
   * Data types flag
   * @returns {{POST: string, GET: string, PRIMARY: string}}
   * @constructor
   */
  static get Types() {
    return {
      PRIMARY: "primary",
      GET: "get",
      POST: "post"
    };
  }

  /**
   * our possible actions a controller can do, used for logging and
   * reference
   * @returns {{REMOVE_DOCS: string}}
   * @constructor
   */
  static get Actions() {
    return {
      REMOVE_DOCS: "REMOVE_DOCS"
    };
  }

  /**
   * errors which the controllers know about
   * @returns {{UNKNOWN: string, ERROR_ARGS: string, PRIMARY_ONLY: string}}
   * @constructor
   */
  static get Error() {
    return {
      ERROR_ARGS: "arg : args is required",
      UNKNOWN: "Unknown team client event type",
      UNKNOWN_CIRCUIT_EVENT: "Unknown circuit client event type",
      PRIMARY_ONLY: "Only primary team supported currently",
      INVALID_PARTICIPATING_CIRCUIT:
        "Invalid get my participating circuits event"
    };
  }

  /**
   * general purpose strings that should prolly go in the {Util}
   * @returns {{ME: string}}
   * @constructor
   */
  static get Strings() {
    return {
      ME: "me",
      MY: "my"
    };
  }

  /**
   * definition names of our controllers functions
   * @returns {{GET_ALL_MY_PARTICIPATING_CIRCUITS: string}}
   * @constructor
   */
  static get Names() {
    return {
      START_WTF: "startWTF",
      START_WTF_WITH_CUSTOM_CIRCUIT_NAME: "startWTFWithCustomCircuitName",
      GET_ALL_MY_PARTICIPATING_CIRCUITS: "getAllMyParticipatingCircuits",
      GET_ALL_MY_DO_IT_LATER_CIRCUITS: "getAllMyDoItLaterCircuits",
      GET_ACTIVE_CIRCUIT: "getActiveCircuit",
      GET_CIRCUIT_WITH_ALL_DETAILS: "getCircuitWithAllDetails"
    };
  }

  /**
   * our possible client context scopes used by gridtime clients
   * @returns {{CIRCUIT_CLIENT: string}}
   * @constructor
   */
  static get Contexts() {
    return {
      CIRCUIT_CLIENT: "CircuitClient"
    };
  }

  /**
   * our base class all controllers extend
   * @param scope
   * @param clazz
   */
  constructor(scope, clazz) {
    this.name = "[" + clazz.name + "]";
    this.scope = scope;
    this.guid = Util.getGuid();
  }

  /**
   * called for every controller automagically
   * @param clazz
   */
  static wireControllersTo(clazz) {
    log.info(
      "[" + BaseController.name + "] wire controllers to -> " + clazz.name
    );
  }

  /**
   * called for every controller automagically
   * @param clazz
   */
  static configEvents(clazz) {
    log.info(
      "[" + BaseController.name + "] configure events for -> " + clazz.name
    );
  }

  /**
   * this function makes a request to the Journal Client interface on gridtime
   * server. This will be worked into our existing data client and model system.
   * @param context
   * @param dto
   * @param name
   * @param type
   * @param urn
   * @param callback
   */
  doClientRequest(context, dto, name, type, urn, callback) {
    let store = {
      context: context,
      dto: dto,
      guid: Util.getGuid(),
      name: name,
      requestType: type,
      timestamp: new Date().getTime(),
      urn: urn
    };
    let client = new DtoClient(store, callback);
    client.doRequest();
  }

  /**
   * handles a generic error for any of our controllers
   * @param message
   * @param event
   * @param arg
   * @param callback
   */
  handleError(message, event, arg, callback) {
    arg.error = message;
    this.delegateCallbackOrEventReplyTo(event, arg, callback);
  }

  /**
   * logs a generate controller request from the system
   * @param name
   * @param arg
   */
  logRequest(name, arg) {
    log.info(chalk.yellowBright(name) + " event : " + JSON.stringify(arg));
  }

  /**
   * logs a generic result from a controller
   * @param name
   * @param type
   * @param id
   * @param count
   */
  logResults(name, type, id, count) {
    log.info(
      chalk.yellowBright(name) +
        " '" +
        type +
        "' : '" +
        id +
        "' -> {" +
        count +
        "}"
    );
  }

  /**
   * performs our callback or makes the event reply
   * @param event
   * @param arg
   * @param callback
   * @returns {Array|*}
   */
  delegateCallbackOrEventReplyTo(event, arg, callback) {
    if (callback) {
      return callback(arg);
    } else if (event) {
      return event.replyTo(arg);
    } else {
      throw new Error("Invalid create client event");
    }
  }

  /**
   * general purpose delegator for controller callbacks
   * @param args
   * @param view
   * @param event
   * @param arg
   */
  delegateCallbackWithView(args, view, event, arg) {
    if (args && args.error && event) {
      arg.error = args.error;
      this.delegateCallbackOrEventReplyTo(event, arg);
    } else {
      this.logResults(this.name, arg.type, arg.id, view.count());
      arg.data = view.data();
      this.delegateCallbackOrEventReplyTo(event, arg);
    }
  }

  /**
   * helper function which takes an entire results set and removes it from the
   * given collection
   * @param view
   * @param collection
   */
  batchRemoveFromViewInCollection(view, collection) {
    collection.removeBatch(view.data());
  }
};

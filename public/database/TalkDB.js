const LokiJS = require("lokijs"),
  Util = require("../Util");

/**
 * this class is used to build new databases
 * @type {TalkDB}
 */
module.exports = class TalkDB extends LokiJS {
  /**
   * the name of our talk database file
   * @returns {string}
   */
  static get Name() {
    return "talk";
  }

  /**
   * builds our talk database for messages
   */
  constructor() {
    super(TalkDB.Name);
    this.name = "[DB." + TalkDB.Name + "]";
    this.guid = Util.getGuid();
  }
};
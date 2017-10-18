const { app, Tray } = require("electron"),
  log = require("electron-log"),
  Util = require("./Util"),
  WindowManager = require("./WindowManager"),
  AppMenu = require("./AppMenu");

/*
 * This class is used to init the Application loading
 */
module.exports = class AppLoader {
  /*
   * called to initialize the loader
   */
  static init() {
    log.info("Initialize AppLoader");
    this.tray = null;
    WindowManager.createWindowLoading();
    this.createTray();
    this.createMenu();
  }

  /*
   * Creates the app's menu for MacOS
   * Ref. https://electron.atom.io/docs/api/menu/#notes-on-macos-application-menu
   */
  // TODO move to its own class
  static createMenu() {
    if (process.platform === "darwin") {
      AppMenu.setApplicationMenu(new AppMenu());
    } else {
      AppMenu.setApplicationMenu(null);
    }
  }

  /*
   * Creates the system tray object and icon. Called by onAppReadyCb()
   */
  // TODO move to its own class
  static createTray() {
    let trayIcon = Util.getAssetPath("/icons/icon.png");
    log.info(trayIcon);
    this.tray = new Tray(trayIcon);
    this.tray.on("click", (event, bounds, position) => {
      log.info("[Tray] tray event -> click");
    });
    this.tray.on("right-click", (event, bounds) => {
      log.info("[Tray] tray event -> right-click");
    });
    this.tray.on("double-click", (event, bounds) => {
      log.info("[Tray] tray event -> double-click");
    });
  }
};

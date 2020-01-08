import React, { Component } from "react";
import { Icon, Menu, Popup } from "semantic-ui-react";
import { MainPanelViewController } from "../../controllers/MainPanelViewController";
import { ActiveViewControllerFactory } from "../../controllers/ActiveViewControllerFactory";

//
// this component is the tab panel wrapper for the console content
//
export default class ConsoleMenu extends Component {
  constructor(props) {
    super(props);
    this.name = "[ConsoleMenu]";
    this.isChanging = false;
    this.animationTime = props.animationTime + 50;
    this.state = {
      activeItem: MainPanelViewController.MenuSelection.DEFAULT,
      isOnline: true,
      pingTime: 0,
      server: "identifying...",
      errorMsg: ""
    };
    this.myController = ActiveViewControllerFactory.createViewController(
      ActiveViewControllerFactory.Views.MAIN_PANEL,
      this
    );
  }

  componentDidMount = () => {
    this.myController.configureHeartbeatListener(this, this.onHeartbeat);
    this.myController.configureMenuListener(
      this,
      this.onRefreshActivePerspective
    );
  };

  componentWillUnmount = () => {
    this.myController.configureMenuListener(this, null);
    this.myController.configureHeartbeatListener(this, null);
  };

  onRefreshActivePerspective = () => {
    let activeMenuItem = this.myController.activeMenuSelection;
    console.log(activeMenuItem);
    console.log(this.name + " refresh active perspective : " + activeMenuItem);
    this.setState({ activeItem: activeMenuItem });
  };

  onHeartbeat(event, arg) {
    this.setState({
      isOnline: arg.isOnline,
      pingTime: arg.pingTime,
      server: arg.server,
      errorMsg: arg.message
    });
  }

  handleMenuClick = (e, { name }) => {
    if (this.isChanging || this.state.activeItem === name) return;
    this.isChanging = true;

    this.myController.changeActivePanel(this.state.activeItem, name);

    setTimeout(() => {
      this.isChanging = false;
    }, this.animationTime);
  };

  handleHideClick = () => {
    this.myController.hideConsoleWindow();
  };

  /// renders the menu component of the console view
  render() {
    const { activeItem, isOnline, pingTime, server, errorMsg } = this.state;
    const networkConnectMenuItem = (
      <Menu.Item
        header
        className={isOnline ? "networkConnect" : "networkConnectError"}
      >
        <Icon
          name={isOnline ? "signal" : "remove circle"}
          color={isOnline ? "green" : "red"}
        />
      </Menu.Item>
    );
    const popupContent = (
      <div>
        <div>
          <i>{server}</i>
        </div>
        <div>
          <i>ping: </i>
          <b>
            <i>{pingTime <= 0 ? "calculating..." : pingTime + "ms"}</i>
          </b>
        </div>
        {!isOnline && (
          <div className="errorMsg">
            <i style={{ color: "red" }}>
              <b>{errorMsg}</b>
            </i>
          </div>
        )}
      </div>
    );
    return (
      <div id="component" className="consoleMenu">
        <Menu size="tiny" inverted>
          <Popup
            trigger={networkConnectMenuItem}
            className="chunkTitle"
            content={popupContent}
            position="top left"
            offset={-2}
            inverted
          />
          <Menu.Item
            name={MainPanelViewController.MenuSelection.JOURNAL}
            color="violet"
            active={
              activeItem === MainPanelViewController.MenuSelection.JOURNAL
            }
            onClick={this.handleMenuClick}
          >
            <Icon name="book" size="large" />
            Journal
          </Menu.Item>
          <Menu.Item
            name={MainPanelViewController.MenuSelection.TROUBLESHOOT}
            color="violet"
            active={
              activeItem === MainPanelViewController.MenuSelection.TROUBLESHOOT
            }
            onClick={this.handleMenuClick}
          >
            <Icon name="lightning" size="large" />
            Troubleshoot
          </Menu.Item>
          <Menu.Item
            name={MainPanelViewController.MenuSelection.FLOW}
            color="violet"
            active={activeItem === MainPanelViewController.MenuSelection.FLOW}
            onClick={this.handleMenuClick}
          >
            <Icon name="random" size="large" />
            Flow
          </Menu.Item>
          <Menu.Item
            name={MainPanelViewController.MenuSelection.PROJECTS}
            color="violet"
            active={
              activeItem === MainPanelViewController.MenuSelection.PROJECTS
            }
            onClick={this.handleMenuClick}
            disabled
          >
            <Icon name="cubes" size="large" />
            Projects
          </Menu.Item>
          <Menu.Item
            name={MainPanelViewController.MenuSelection.CIRCLES}
            color="violet"
            active={
              activeItem === MainPanelViewController.MenuSelection.CIRCLES
            }
            onClick={this.handleMenuClick}
            disabled
          >
            <Icon name="users" size="large" />
            Circles
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="hide" onClick={this.handleHideClick}>
              <Icon name="toggle up" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
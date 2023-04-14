import React, {Component} from "react";
import {RendererEventFactory} from "../events/RendererEventFactory";
import {BaseClient} from "../clients/BaseClient";
import UtilRenderer from "../UtilRenderer";
import {MemberClient} from "../clients/MemberClient";
import FerviePeekAnimation from "./fervie/FerviePeekAnimation";
import {Button, Icon, Popup} from "semantic-ui-react";
import {CodeClient} from "../clients/CodeClient";

/**
 * this component is the layout for the always-on-top active status bar
 */
export default class ActiveStatusLayout extends Component {

  /**
   * Initialize the component
   * @param props - the properties of the component to render
   */
  constructor(props) {
    super(props);
    this.name = "[ActiveStatusLayout]";
    this.state = {
      me: MemberClient.me
    }
  }

  /**
   * Called when the fervie button is first loaded
   */
  componentDidMount = () => {
    this.meUpdateListener =
      RendererEventFactory.createEvent(
        RendererEventFactory.Events.VIEW_CONSOLE_ME_UPDATE,
        this,
        this.onMeRefresh
      );

    this.talkRoomMessageListener =
      RendererEventFactory.createEvent(
        RendererEventFactory.Events.TALK_MESSAGE_ROOM,
        this,
        this.onTalkRoomMessage
      );

  };

  onTalkRoomMessage = (event, arg) => {
    let mType = arg.messageType,
      memberId = UtilRenderer.getMemberIdFromMetaProps(arg.metaProps);

    if (mType === BaseClient.MessageTypes.TEAM_MEMBER
      && this.state.me && memberId === this.state.me.id) {
      this.updateMe(arg.data);
    }
  }

  updateMe(me) {
    this.setState({
      me: me
    });
  }

  componentWillUnmount() {
    this.meUpdateListener.clear();
    this.talkRoomMessageListener.clear();
  }

  onMeRefresh = () => {
    this.setState({
      me: MemberClient.me
    });
  }

  getBubbleContent() {
    let content = "Eh?";
    if (this.state.me) {
      if (this.state.me.workingOn) {
        content = this.state.me.workingOn;
      }
    }
    if (content.length > 69) {
      content = content.substring(0, 67) + "..";
    }

    return content;
  }

  /**
   * renders the status bar layout
   * @returns {*} - the JSX to render
   */
  render() {

    let bubbleContent = this.getBubbleContent();

    return (
      <div id="component" className="activeStatusLayout" >
        <div className="statusBar">
          <span className="statusHeader">Focus:</span>
          <span className="status">
            {bubbleContent}
          </span>
        </div>
      </div>
    );
  }

}

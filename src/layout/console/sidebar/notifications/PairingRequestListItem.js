import React, {Component} from "react";
import {Label, List, Popup,} from "semantic-ui-react";
import {FervieClient} from "../../../../clients/FervieClient";
import {NotificationClient} from "../../../../clients/NotificationClient";

export default class PairingRequestListItem extends Component {
  constructor(props) {
    super(props);
    this.wtfTimer = null;

  }


  /**
   * renders our popup content for our GUI to display to the user
   * @param trigger
   * @returns {*}
   */
  getPopupContent(trigger) {
    let teamMemberName =  this.props.model.data.fromDisplayName;

    let popupContent = (
      <div>
        <div>
          <div>
            <b>Pairing Request</b>
          </div>
          <div>
            <i>{teamMemberName} would like to pair with you.</i>
          </div>
        </div>
      </div>
    );

    return (
      <Popup
        trigger={trigger}
        className="chunkTitle"
        content={popupContent}
        position="right center"
        inverted
        hideOnScroll
      />
    );
  }

  handleConfirmClick() {
    console.log("Confirm clicked!");

    let fromMemberId = this.props.model.data.fromMemberId;
    let toMemberId = this.props.model.data.toMemberId
    FervieClient.confirmPairingLink(fromMemberId, toMemberId, this, (arg) => {
      if (arg.error) {
        console.error("Unable to confirm pairing link");
      } else {
        NotificationClient.deleteNotification(this.props.model.id, this, (arg) => {
          if (arg.error) {
            console.error("Unable to delete notification");
          }
          this.props.refresh();
        });
      }
    });

  }

  render() {
    let fullName = "Team Member";
    if (this.props.model && this.props.model.data) {
      fullName = this.props.model.data.fromFullName;
    }

    return this.getPopupContent(
      <List.Item
        className="notificationItem"
        key={this.props.id}
      >
        <List.Content
          floated="right"
          verticalAlign="middle"
          className="actionButton"
        >
          <Label color="violet" onClick={this.handleConfirmClick}>
            <span>
              Confirm
            </span>
          </Label>
        </List.Content>
        <List.Content>
          <List.Header>
            Pairing Request
          </List.Header>
          <i className="name">
            ({fullName})
          </i>
        </List.Content>
      </List.Item>
    );
  }
}

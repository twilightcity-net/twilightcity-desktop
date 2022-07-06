import { BaseClient } from "./BaseClient";
import { RendererEventFactory } from "../events/RendererEventFactory";

/**
 * this class is used to converse with gridtime about fervie details
 */
export class FervieClient extends BaseClient {
  /**
   * stores the event replies for client events
   * @type {Map<any, any>}
   */
  static replies = new Map();

  /**
   * builds the Client for fervie requests in Gridtime
   * @param scope
   */
  constructor(scope) {
    super(scope, "[FervieClient]");
    this.event = RendererEventFactory.createEvent(
      RendererEventFactory.Events.FERVIE_CLIENT,
      this,
      null,
      this.onFervieEventReply
    );
  }

  /**
   * general enum list of all of our possible circuit events
   * @constructor
   */
  static get Events() {
    return {
      SAVE_FERVIE_DETAILS: "save-fervie-details",
      REQUEST_PAIR_LINK: "request-pair-link",
      CONFIRM_PAIR_LINK: "confirm-pair-link",
      STOP_PAIRING: "stop-pairing",
      CANCEL_PAIR_REQUEST: "cancel-pair-request",
      HAS_OUTGOING_PAIR_REQUEST: "has-outgoing-pair-request",
      REQUEST_BUDDY_LINK: "request-buddy-link",
      CONFIRM_BUDDY_LINK: "confirm-buddy-link",
      REMOVE_BUDDY_LINK: "remove-buddy-link",
      GET_BUDDY_LIST: "get-buddy-list",
      GET_BUDDY_ME: "get-buddy-me",
      GET_PENDING_BUDDY_REQUEST_LIST: "get-pending-buddy-request-list",
      INVITE_TO_BUDDY_LIST: "invite-to-buddy-list",
      INVITE_TO_TEAM: "invite-to-team",
      USE_INVITATION_KEY: "use-invitation-key",
      UPDATE_ACCOUNT_USERNAME: "update-account-username",
      UPDATE_ACCOUNT_FULLNAME: "update-account-fullname",
      UPDATE_ACCOUNT_DISPLAYNAME: "update-account-displayname"
    };
  }

  /**
   * initializes the class in the current application context
   * @param scope
   */
  static init(scope) {
    if (!FervieClient.instance) {
      FervieClient.instance = new FervieClient(scope);
    }
  }

  /**
   * saves configured fervie details like color and accessories then pushes an update over talknet
   * @param fervieColor
   * @param fervieSecondaryColor
   * @param fervieTertiaryColor
   * @param fervieAccessory
   * @param fervieName
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static saveFervieDetails(
    fervieColor,
    fervieSecondaryColor,
    fervieTertiaryColor,
    fervieAccessory,
    fervieName,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.SAVE_FERVIE_DETAILS,
      {
        fervieColor: fervieColor,
        fervieSecondaryColor: fervieSecondaryColor,
        fervieTertiaryColor: fervieTertiaryColor,
        fervieAccessory: fervieAccessory,
        fervieName: fervieName,
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * Invites a fervie to the buddy list via email, a talk message should
   * come back with the pending buddy request so we can add it to the view
   * @param email
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static inviteToBuddyList(
    email,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.INVITE_TO_BUDDY_LIST,
      {
        email: email
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }


  /**
   * Invites a member to the team, should send an email with
   * an activation code for downloading the app.  Then when logging in,
   * will automatically be added to the team
   * @param email
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static inviteToTeam(
    email,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.INVITE_TO_TEAM,
      {
        email: email
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }


  /**
   * Uses a keycode for this account, to be invited to an organization
   * or a team.  Invite codes will usually come via email
   * @param keycode
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static useInvitationKey(
    keycode,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.USE_INVITATION_KEY,
      {
        keycode: keycode
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Updates the username associated with an account, will send a status update
   * message over talk if successful
   * @param username
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static updateAccountUsername(
    username,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.UPDATE_ACCOUNT_USERNAME,
      {
        username: username
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Updates the fullName associated with an account, will send a status update
   * message over talk if successful
   * @param fullName
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static updateAccountFullName(
    fullName,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.UPDATE_ACCOUNT_FULLNAME,
      {
        fullName: fullName
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }




  /**
   * Updates the displayName associated with an account, will send a status update
   * message over talk if successful
   * @param displayName
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static updateAccountDisplayName(
    displayName,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.UPDATE_ACCOUNT_DISPLAYNAME,
      {
        displayName: displayName
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }




  /**
   * Add a fervie to your buddy list by sending a request (must be confirmed by recipient)
   * @param buddyMemberId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static requestBuddyLink(
    buddyMemberId,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.REQUEST_BUDDY_LINK,
      {
        buddyMemberId: buddyMemberId
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * Confirm adding the requesting member as a buddy
   * @param requestingMemberId
   * @param requestId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static confirmBuddyLink(
    requestingMemberId,
    requestId,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.CONFIRM_BUDDY_LINK,
      {
        requestingMemberId: requestingMemberId,
        buddyRequestId: requestId
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Removes a fervie from your buddy list
   * @param buddyMemberId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static removeBuddyLink(
    buddyMemberId,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.REMOVE_BUDDY_LINK,
      {
        buddyMemberId: buddyMemberId
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Gets all the fervies on your buddy list
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static getBuddyList(
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.GET_BUDDY_LIST,
      {},
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Gets all the fervies on your buddy list
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static getBuddyMe(
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.GET_BUDDY_ME,
      {},
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Gets all the pending fervie adds on your buddy list
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static getPendingBuddyList(
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.GET_PENDING_BUDDY_REQUEST_LIST,
      {},
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }



  /**
   * Create a pairing link with the specified team member
   * @param memberId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static requestPairingLink(memberId, scope, callback) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.REQUEST_PAIR_LINK,
      {
        memberId: memberId,
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * Get outgoing pairing request for a specific user
   * @param memberId
   * @param scope
   * @param callback
   */
  static hasOutgoingPairingRequest(memberId, scope, callback) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.HAS_OUTGOING_PAIR_REQUEST,
      {
        memberId: memberId,
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }


  /**
   * Cancel a pair request to a specified team member
   * @param memberId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static cancelPairRequest(memberId, scope, callback) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.CANCEL_PAIR_REQUEST,
      {
        memberId: memberId,
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * Create a pairing link with the specified team member
   * @param fromMemberId
   * @param toMemberId
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static confirmPairingLink(
    fromMemberId,
    toMemberId,
    scope,
    callback
  ) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.CONFIRM_PAIR_LINK,
      {
        fromMemberId: fromMemberId,
        toMemberId: toMemberId,
      },
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * Stop pairing and break away from any existing pairing networks
   * @param scope
   * @param callback
   * @returns {RendererClientEvent}
   */
  static stopPairing(scope, callback) {
    let event = FervieClient.instance.createClientEvent(
      FervieClient.Events.STOP_PAIRING,
      {},
      scope,
      callback
    );

    FervieClient.instance.notifyFervie(event);
    return event;
  }

  /**
   * the event callback used by the event manager. removes the event from
   * the local map when its recieved the response from the main process. the
   * call back is bound to the scope of what was pass into the api of this client
   * @param event
   * @param arg
   */
  onFervieEventReply = (event, arg) => {
    let clientEvent = FervieClient.replies.get(arg.id);
    this.logReply(
      FervieClient.name,
      FervieClient.replies.size,
      arg.id,
      arg.type
    );
    if (clientEvent) {
      FervieClient.replies.delete(arg.id);
      clientEvent.callback(event, arg);
    }
  };

  /**
   * notifies the main process fervie that we have a new event to process. This
   * function will add the client event and callback into a map to look up when
   * this events reply is ready from the main prcess thread
   * @param clientEvent
   */
  notifyFervie(clientEvent) {
    console.log(
      "[" +
        FervieClient.name +
        "] notify -> " +
        JSON.stringify(clientEvent)
    );
    FervieClient.replies.set(clientEvent.id, clientEvent);
    this.event.dispatch(clientEvent, true);
  }
}

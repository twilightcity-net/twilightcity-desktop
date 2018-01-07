import React, { Component } from "react";
import TimeScrubber from "./TimeScrubber";
import TroubleshootItems from "./TroubleshootItems";
import TroubleshootEntry from "./TroubleshootEntry";

//
// this component is the tab panel wrapper for the console content
//
export default class TroubleshootLayout extends Component {
  // constructor(props) {
  //   super(props);
  // }

  /// performs a simple calculation for dynamic height of items, this
  /// is becuase there will be a slight variation in the screen height
  calculateJournalItemsHeight() {
    let heights = {
      rootBorder: 2,
      consoleMenu: 28,
      contentMargin: 8,
      contentPadding: 8,
      timeScrubber: 52,
      journalEntry: 50
    };

    /// subtract the root element's height from total window height that is
    /// half of the clients screen height
    return (
      window.innerHeight -
      heights.rootBorder -
      heights.consoleMenu -
      heights.contentMargin -
      heights.contentPadding -
      heights.timeScrubber -
      heights.journalEntry
    );
  }

  /// renders the journal layout of the console view
  render() {
    return (
      <div id="component" className="journalLayout">
        <div id="wrapper" className="timeScrubber">
          <TimeScrubber />
        </div>
        <div id="wrapper" className="troubleshootItems">
          <TroubleshootItems height={this.calculateJournalItemsHeight()} />
        </div>
        <div id="wrapper" className="journalEntry">
          <TroubleshootEntry />
        </div>
      </div>
    );
  }
}

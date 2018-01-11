import React, { Component } from "react";
import TimeScrubber from "./TimeScrubber";
import TroubleshootPanelDefault from "./TroubleshootPanelDefault";
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
  calculateTroubleshootItemsHeight() {
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
    const troubleshootPanelSegmentItems = (
      <div id="wrapper" className="troubleshootItems">
        <TroubleshootItems height={this.calculateTroubleshootItemsHeight()} />
      </div>
    );
    const troubleshootPanelSegmentEntry = (
      <div id="wrapper" className="journalEntry">
        <TroubleshootEntry />
      </div>
    );
    return (
      <div id="component" className="troubleshootLayout">
        <div id="wrapper" className="timeScrubber">
          <TimeScrubber />
        </div>
        <div id="wrapper" className="troubleshootPanelDefault">
          <TroubleshootPanelDefault
            height={this.calculateTroubleshootItemsHeight()}
          />
        </div>
        {false && troubleshootPanelSegmentItems}
        {false && troubleshootPanelSegmentEntry}
      </div>
    );
  }
}

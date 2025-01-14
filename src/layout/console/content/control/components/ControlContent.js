import React, {Component} from "react";
import {DimensionController} from "../../../../../controllers/DimensionController";
import ControlChart from "./ControlChart";
import ControlMetrics from "./ControlMetrics";

/**
 * this component handles the main latest week flow intro dashboard
 */
export default class ControlContent extends Component {
  /**
   * the constructor function which builds the LatestWeekContent component
   * @param props
   */
  constructor(props) {
    super(props);
    this.name = "[" + ControlContent.name + "]";
    this.state = {
      dayCoords: null,
      selectedDay: null
    };
  }

  componentDidMount() {
  }


  /**
   * renders the main flow content body of this console panel
   * @returns {*} - the JSX to be rendered in the window
   */
  render() {
    let opacity = 0;
    let flowContent = (
      <div id="component" className="loadingChart">
        Loading...
      </div>
    );

    let chartWidth = Math.round(DimensionController.getFlowPanelWidth() * 0.7);
    let remainingWidth = DimensionController.getFlowPanelWidth() - chartWidth;

    if (this.props.chartDto) {
      flowContent = (
        <div className="troubleContentWrapper">
          <div className="chartWrapper" style={{width: chartWidth + "px"}}>
            <ControlChart
              chartDto={this.props.chartDto}
              weekOffset={this.props.weekOffset}
              me={this.props.me}
              onClickNavWeek={this.props.onClickNavWeek}
              onClickGraphPoint={this.props.onClickGraphPoint}
              onHoverGraphPoint={this.props.onHoverGraphPoint}
              onHoverOffGraphPoint={this.props.onHoverOffGraphPoint}
            />
          </div>
          <div className="metricsWrapper" style={{width: remainingWidth + "px"}}>
            <ControlMetrics
              chartDto={this.props.chartDto}
              />
          </div>
        </div>
      );
    }

    if (this.props.visible) {
      opacity = 1;
    }

    let height = DimensionController.getHeightFor(
      DimensionController.Components.FLOW_PANEL
    );

    return (
      <div
        id="component"
        className="troubleControlContent"
        style={{
          height: height,
          opacity: opacity
        }}
      >
        {flowContent}
      </div>
    );
  }
}

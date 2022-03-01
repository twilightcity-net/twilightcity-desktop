import { ActiveViewController } from "./ActiveViewController";
import { RendererEventFactory } from "../events/RendererEventFactory";

export class ChartPopoutController extends ActiveViewController {
  static get ChartType() {
    return {
      TASK_FOR_WTF: "task-for-wtf",
    };
  }

  constructor(scope) {
    super(scope);

    this.consoleIsCollapsed = true;

    this.openChartDispatcher =
      RendererEventFactory.createEvent(
        RendererEventFactory.Events.WINDOW_OPEN_CHART,
        this
      );

    this.closeChartDispatcher =
      RendererEventFactory.createEvent(
        RendererEventFactory.Events.WINDOW_CLOSE_CHART,
        this
      );
  }

  /**
   * Open a chart popup for a specific circuit
   * @param circuitName
   */
  openChartWindowForCircuitTask(circuitName) {
    console.log("circuitName on client: " + circuitName);
    this.openChartDispatcher.dispatch({
      chartType:
        ChartPopoutController.ChartType.TASK_FOR_WTF,
      circuitName: circuitName,
    });
  }

  /**
   * Close a chart popup window for a specific circuit
   * @param circuitName
   */
  closeChartWindowForCircuitTask(circuitName) {
    console.log("circuitName on client: " + circuitName);
    this.closeChartDispatcher.dispatch({
      chartType:
        ChartPopoutController.ChartType.TASK_FOR_WTF,
      circuitName: circuitName,
    });
  }
}
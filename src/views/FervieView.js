import React, {Component} from "react";
import FervieLayout from "../layout/FervieLayout";
import {MemberClient} from "../clients/MemberClient";
import {CodeClient} from "../clients/CodeClient";

/**
 *  This view class is used to show a little fervie button,
 *  in the lower right-hand corner of your screen.
 */
export default class FervieView extends Component {

  constructor() {
    super();
    MemberClient.init(this);
    CodeClient.init(this);
  }

  componentDidMount = () => {

  }

  /// renders the view into our root element of our window
  render() {
    return (
      <FervieLayout />
    );
  }
}

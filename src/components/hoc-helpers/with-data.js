import React, { Component } from "react";
import AnyList from "../any-list";
import DataService from "../../services/data_service";

const WithData = () => {
  return class extends Component {
    dataService = new DataService();

    render() {
      return (
        <AnyList
          getData={this.dataService.getAllInsights}
          user={this.dataService.checkUser()}
          feature="insights"
          headline="Insights"
        />
      );
    }
  };
};

export default WithData();

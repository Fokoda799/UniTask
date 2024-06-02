import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["UniTasks"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "65%",
            },
          },
        },
      },
      series: [64],
    };
  }

  render() {
    return (
      <div className="radialbar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height="500"
        />
      </div>
    );
  }
}

export default RadialBar;

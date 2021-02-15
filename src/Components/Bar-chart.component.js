import React from "react";
import { Bar } from "react-chartjs-2";

const BarChartComponent = () => {
    return(
        <Bar
    data={{
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
      datasets: [
        {
          label: "All Task",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
        //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //   hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },

        {
          label: "Task done",
          backgroundColor: "rgba(155,231,91,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
        //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //   hoverBorderColor: "rgba(255,99,132,1)",
          data: [45, 79, 50, 41, 16, 85, 20]
        },
        {
            label: "Task Unfinished",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
          //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
          //   hoverBorderColor: "rgba(255,99,132,1)",
            data: [20, 20, 50, 41, 16, 85, 20]
          }
      ]
    }}
    options={{
      legend: { display: true },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      }
    }}
  />

    )
}

export default BarChartComponent
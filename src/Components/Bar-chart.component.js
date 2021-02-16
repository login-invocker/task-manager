import React from "react";
import { Bar } from "react-chartjs-2";

const BarChartComponent = (props) => {
    const [dataTask, setDataTask] = React.useState(props.config)

    React.useEffect(() => {
        setDataTask(props.config)
    })
        return(
        <Bar
    data={{
      labels: dataTask.date,
      datasets: [
        {
          label: "All Task",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
        //   stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: dataTask.allTask
        },

        {
          label: "Task done",
          backgroundColor: "rgba(155,231,91,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
        //   stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: dataTask.taskDone
        },
        {
            label: "Task Unfinished",
            backgroundColor: "red",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            // stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: dataTask.taskUnfinished
          }
      ]
    }}
    options={{
      legend: { display: true },
      title: {
        display: true,
        text: `Bảng thống kê khối lượng công việc trong ${dataTask.date?dataTask.date.length: ""} ngày từ ${dataTask.date?dataTask.date[0]: ""} đến ${dataTask.date?dataTask.date[dataTask.date.length - 1]: ""}` 
      }
    }}
  />

    )
}

export default BarChartComponent
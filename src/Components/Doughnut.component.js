import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutComponent = (props) => {
    const config = props.config

    const setBg = () => {
        
        let listColor = []
        config.data.forEach(() => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColor = "#" + randomColor;
            listColor.push(randomColor)
        })
        return listColor
      }
    return (
<Doughnut
        data={{
          labels: config.labels,
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: setBg(),
              data: config.data
            }
          ]
        }}
        onElementsClick={elems => {
            // if required to build the URL, you can 
            // get datasetIndex and value index from an `elem`:
            if(elems[0])
            console.log(elems[0]._datasetIndex + ', ' + elems[0]._index);
            // and then redirect to the target page:
            // window.location = "https://example.com";
        }}
        option={{
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }
        }}
      />
    )
}

export default DoughnutComponent
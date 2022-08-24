import React from 'react'
import { Bar,Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import './graphStyles.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Graph2() {
    const data={
        labels:[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        datasets:[
            {
                id:1,
                label: "first",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                id:2,
                label: "second",
                backgroundColor: "rgba(155,231,91,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [45, 79, 50, 41, 16, 85, 20]
            }
        ]
    }

    const options = {
        responsive: true,
        legend: {
          display: false
        },
        type: "bar"
    }


  return (
    <div className='graph2_container'>
        <Bar
            data={data}
            width={null}
            height={null}
            options={options}
        />
    </div>
  )
}

export default Graph2
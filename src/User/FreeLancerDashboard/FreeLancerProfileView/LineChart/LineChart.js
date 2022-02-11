import React from 'react'
import {Line} from 'react-chartjs-2'

export const LineChart = () => {

     const data = {
             labels:["jan","feb","march","april","may","june","july","aug","sep","oct"],
             datasets:[
                 {
                     label:"Sales for 2021 (m)",
                     data:[200,600,100,400,90,300,200,400,870,200],
                     fill: false,
                     borderColor: 'rgb(75, 192, 192)',
                 }
             ]
         
     }

    return (
        <>
        <Line data={data}/>
        </>
    )
}

import React from "react";
import { useHackerNews } from '../api';
import { useParams } from '@reach/router';
import "react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

export default () => {
  const params = useParams();
  const { data } = useHackerNews({pageNumber: parseInt(params.pageNumber)}); 
  if(!data) {
    return null;
  }
  const plotData = data.map((item,index) => {
    return {
      x: index,
      y: item.points,
      id: item.id
    }
  });

  const yTickValues =  plotData.map( item => parseInt(item.y) );
  const xTickValues =  plotData.map( item => parseInt(item.x) );

  const XLabelValues =  plotData.map( item => item.id );

  return (
    <XYPlot width={1000} height={300}>
        <VerticalGridLines/>
        <HorizontalGridLines />
        <XAxis  title={"ID"}
                labelFormat={v => `${v}`}

           labelValues={XLabelValues}
           tickValues={xTickValues} />
        <YAxis title={"Points"}  tickValues={yTickValues} />
        <LineSeries
           data={plotData}
         />
    </XYPlot>
  );
};

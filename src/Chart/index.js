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
  const plotData = data.map(item => {
    return {
      x: item.id,
      y: item.points
    }
  });

  return (
    <XYPlot width={1000} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis
        title="ID"
        labelFormat={(v) => `Value is ${v}`}
        labelValues={plotData.map( (item) =>item.x)}
        tickValues={plotData.map( (item,i) => i)}
      />
      <YAxis  title="ID" />
      <LineSeries
        data={plotData}
      />
    </XYPlot>
  );
};

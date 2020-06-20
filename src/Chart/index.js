import React from "react";
import { useHackerNews } from '../api';
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
  const { data } = useHackerNews(); 
  if(!data) {
    return null;
  }
  
  return (
    <XYPlot width={1000} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis
        hideLine
        title="X"
        labelFormat={(v) => `Value is ${v}`}
        labelValues={[2]}
        tickValues={[1, 1.5, 2, 3]}
      />
      <YAxis hideTicks />
      <LineSeries
        data={data.map(item => {
          return {
            x: item.id,
            y: item.points
          }
        })}
      />
    </XYPlot>
  );
};

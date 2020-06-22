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
  LineMarkSeries,
} from "react-vis";
import {
  useWindowWidth
} from '@react-hook/window-size'
 

export default () => {
  const params = useParams();
  
  const { data } = useHackerNews({pageNumber: parseInt(params.pageNumber)}); 
  if(!data) {
    return null;
  }
  const windowWidth = useWindowWidth();

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
    <XYPlot width={windowWidth > 1440 ? 1000 : windowWidth -10 } height={300}>
        <VerticalGridLines/>
        <HorizontalGridLines />
        <XAxis  title={"ID"}
                labelFormat={v => `${v}`}

           labelValues={XLabelValues}
           tickValues={xTickValues} />
        <YAxis title={"Points"}  tickValues={yTickValues} />
        <LineMarkSeries
           animation
           data={plotData}
         />
    </XYPlot>
  );
};

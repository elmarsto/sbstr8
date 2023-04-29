import * as Plot from '@observablehq/plot';
import * as React from 'react';
import { useEffect, useRef } from 'react';

interface GraphProps {
  plot: Plot.PlotOptions;
}

export const Graph = ({ plot }: GraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = Plot.plot(plot);
    if (containerRef.current) {
      containerRef.current.append(graph);
    }
    return () => graph.remove();
  }, [plot]);

  return <div ref={containerRef} />;
};

export default Graph;

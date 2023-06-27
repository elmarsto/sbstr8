'use client';
import * as Plot from '@observablehq/plot';
import * as React from 'react';
import { useEffect, useRef } from 'react';

export interface GraphProps {
  plot: Plot.PlotOptions;
  className?: string;
  style?: React.CSSProperties;
}

export const Graph = ({ plot, className, style }: GraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = Plot.plot(plot);
    if (containerRef.current) {
      containerRef.current.append(graph);
    }
    return () => graph.remove();
  }, [plot]);

  return <div ref={containerRef} className={className} style={style} />;
};

export default Graph;

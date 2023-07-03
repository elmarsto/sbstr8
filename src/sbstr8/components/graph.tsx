'use client';
import * as Plot from '@observablehq/plot';
import ccn from '@sindresorhus/class-names';
import { CSSProperties, useEffect, useRef } from 'react';

export interface GraphProps {
  plot: Plot.PlotOptions;
  className?: string;
  style?: CSSProperties;
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

  return (
    <div
      ref={containerRef}
      className={ccn('sbstr8:graph', className)}
      style={style}
    />
  );
};

export default Graph;

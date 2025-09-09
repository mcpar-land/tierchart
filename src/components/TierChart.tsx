import Draggable from "react-draggable";
import "./TierChart.css";
import { useRef } from "react";

type Character = {
  name: string;
  imgSrc: string;
};

type TierChartProps = {
  labelN: string;
  labelS: string;
  labelE: string;
  labelW: string;
  characters: Character[];
};

const TierChart = ({
  characters,
  labelN,
  labelS,
  labelE,
  labelW,
}: TierChartProps) => {
  const width = 760;
  const height = 680;
  const padding = 15;
  const strokeWidth = 5;
  const fontSize = "2em";
  const nSmallLines = 20;
  const smallLineStroke = "lightgray";
  return (
    <div className="tier-chart">
      <svg className="tier-chart-grid" width={width + ""} height={height + ""}>
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        {Array(nSmallLines + 1)
          .fill(0)
          .map((_, i) => (
            <line
              key={i}
              x1={(width / (nSmallLines + 1)) * i}
              y1={0}
              x2={(width / (nSmallLines + 1)) * i}
              y2={height}
              stroke={smallLineStroke}
              stroke-width={1}
            />
          ))}
        {Array(nSmallLines + 1)
          .fill(0)
          .map((_, i) => (
            <line
              key={i}
              x1={0}
              y1={(height / (nSmallLines + 1)) * i}
              x2={width}
              y2={(height / (nSmallLines + 1)) * i}
              stroke={smallLineStroke}
              stroke-width={1}
            />
          ))}
        <line
          x1={width / 2}
          y1={padding}
          x2={width / 2}
          y2={height - padding}
          stroke="black"
          stroke-width={strokeWidth}
          marker-start="url(#arrowhead)"
          marker-end="url(#arrowhead)"
        />
        <line
          x1={padding}
          y1={height / 2}
          x2={width - padding}
          y2={height / 2}
          stroke="black"
          stroke-width={strokeWidth}
          marker-start="url(#arrowhead)"
          marker-end="url(#arrowhead)"
        />
        <text
          className="chart-label"
          x={width / 2 + strokeWidth}
          y={padding * 2}
          dy="1em"
          text-anchor="start"
          font-size={fontSize}
        >
          {labelN}
        </text>
        <text
          className="chart-label"
          x={width / 2 - strokeWidth}
          y={height - padding * 2 - strokeWidth}
          text-anchor="end"
          font-size={fontSize}
        >
          {labelS}
        </text>
        <text
          className="chart-label"
          x={width - padding * 2}
          y={height / 2}
          dy="1em"
          text-anchor="end"
          font-size={fontSize}
        >
          {labelE}
        </text>
        <text
          className="chart-label"
          x={padding * 2}
          y={height / 2 - strokeWidth}
          text-anchor="start"
          font-size={fontSize}
        >
          {labelW}
        </text>
      </svg>
      <div className="character-holder">
        {characters.map((c, i) => (
          <DraggableBox character={c} key={i} />
        ))}
      </div>
    </div>
  );
};

const DraggableBox = ({ character }: { character: Character }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef} bounds=".tier-chart">
      <div ref={nodeRef} className="draggable-box">
        {character.name}
      </div>
    </Draggable>
  );
};

export default TierChart;

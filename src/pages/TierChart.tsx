import Draggable from "react-draggable";
import "./TierChart.css";
import { useCallback, useRef, useState } from "react";
import type { Character, GameData } from "../types";
import { Head } from "vite-react-ssg";
import { toPng } from "html-to-image";

type TierChartProps = {
  gameData: GameData;
};

const TierChart = ({
  gameData: { name, slug, characters, portraitHeight, portraitWidth },
}: TierChartProps) => {
  const [labelN, inputN] = useInputField("Top tier");
  const [labelS, inputS] = useInputField("Low tier");
  const [labelE, inputE] = useInputField("Well-rounded");
  const [labelW, inputW] = useInputField("Has flaws");

  const tcRef = useRef<HTMLDivElement>(null);

  const width = 760;
  const height = 680;

  const handleDownload = useCallback(() => {
    if (tcRef.current === null) {
      return;
    }

    toPng(tcRef.current, { cacheBust: true, width, height })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `tierchart_${slug}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [tcRef, name]);

  const padding = 15;
  const strokeWidth = 5;
  const fontSize = "1.5em";
  const nSmallLines = 20;
  const smallLineStroke = "lightgray";
  return (
    <div className="tier-chart">
      <Head>
        <title>Tiercharts - {name}</title>
      </Head>
      <div className="tier-chart-header">
        <div>
          <a href="/">Back to game list</a>
        </div>
        <div className="tier-chart-title">Tiercharts - {name}</div>
      </div>
      <div className="tier-chart-drag-container" ref={tcRef}>
        <svg
          className="tier-chart-grid"
          width={width + ""}
          height={height + ""}
        >
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
                strokeWidth={1}
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
                strokeWidth={1}
              />
            ))}
          <line
            x1={width / 2}
            y1={padding}
            x2={width / 2}
            y2={height - padding}
            stroke="black"
            strokeWidth={strokeWidth}
            markerStart="url(#arrowhead)"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1={padding}
            y1={height / 2}
            x2={width - padding}
            y2={height / 2}
            stroke="black"
            strokeWidth={strokeWidth}
            markerStart="url(#arrowhead)"
            markerEnd="url(#arrowhead)"
          />
          <text
            className="chart-label"
            x={width / 2 + strokeWidth}
            y={padding * 2}
            dy="1em"
            textAnchor="start"
            fontSize={fontSize}
          >
            {labelN}
          </text>
          <text
            className="chart-label"
            x={width / 2 - strokeWidth}
            y={height - padding * 2 - strokeWidth}
            textAnchor="end"
            fontSize={fontSize}
          >
            {labelS}
          </text>
          <text
            className="chart-label"
            x={width - padding * 2}
            y={height / 2}
            dy="1em"
            textAnchor="end"
            fontSize={fontSize}
          >
            {labelE}
          </text>
          <text
            className="chart-label"
            x={padding * 2}
            y={height / 2 - strokeWidth}
            textAnchor="start"
            fontSize={fontSize}
          >
            {labelW}
          </text>
        </svg>
        <div className="character-holder">
          {characters.map((c, i) => (
            <DraggableBox
              character={c}
              key={i}
              portraitWidth={portraitWidth}
              portraitHeight={portraitHeight}
            />
          ))}
        </div>
      </div>
      <div className="axis-labels">
        <button className="download-btn" onClick={handleDownload}>
          Download
        </button>
        {inputN}
        <div className="axis-labels-e-w">
          {inputW}
          {inputE}
        </div>
        {inputS}
      </div>
    </div>
  );
};

const useInputField = (defaultValue: string) => {
  const [val, setVal] = useState(defaultValue);

  const node = <input value={val} onChange={(e) => setVal(e.target.value)} />;

  return [val, node];
};

const DraggableBox = ({
  character,
  portraitWidth,
  portraitHeight,
}: {
  character: Character;
  portraitWidth: number;
  portraitHeight: number;
}) => {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef} bounds=".tier-chart-drag-container">
      <img
        src={character.imgSrc}
        draggable={false}
        ref={nodeRef}
        title={character.name}
        className="draggable-box"
        width={portraitWidth}
        height={portraitHeight}
      />
    </Draggable>
  );
};

export default TierChart;

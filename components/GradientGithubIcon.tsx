import React from "react";

interface svgProps {
  displayValue: string
}
const GradientGithubIcon = ({displayValue}: svgProps) => {
  return (
    <div style={{ position: "relative",  padding:0, margin:0, height:"1em"}}>
      {/* Shadow */}
      <svg
        stroke="none"
        fill="#101419" 
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: "5px",
          top: "5px",
          filter: "blur(1px)",
          display:`${displayValue}`
        }}
      >
        <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" />
      </svg>

      {/* Main Icon */}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="letterHover icon-glow"
        cursor={`pointer`}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "var(--sweet-green)", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#bf4d36", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#fffff0", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <path
          d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"
          fill={`url(#gradient)`}
        ></path>
      </svg>
    </div>
  );
};

export default GradientGithubIcon;

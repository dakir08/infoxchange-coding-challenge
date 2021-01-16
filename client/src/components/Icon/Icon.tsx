import React from "react";
import styled from "@emotion/styled";
import { CSSProperties, MouseEvent } from "react";
import { DEFAULT_FONT_SIZE } from "../../style/global-style-constants";

interface SvgPath {
  d: string;
  fill?: string;
  fillRule?: "evenodd" | "nonzero";
  clipRule?: "evenodd" | "nonzero";
}

export interface IconData {
  svgCircle?: { origin: number; radius: number };
  svgRectangle?: {
    style: CSSProperties;
    originX: number;
    originY: number;
    height: number;
    width: number;
  };
  size: number;
  svgPaths: SvgPath[];
  stroke?: {
    width: string;
    lineCap?: "inherit" | "butt" | "round" | "square" | undefined;
    lineJoin?: "inherit" | "round" | "miter" | "bevel" | undefined;
  };
}

interface IconProps {
  data: IconData;
  id?: string;
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
  onMouseOver?: (e: React.MouseEvent<SVGSVGElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGSVGElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

interface StyledSvgProps {
  size: number;
  hasStroke?: boolean;
}

const StyledSvg = styled.svg<StyledSvgProps>`
  height: ${({ size }) => size / DEFAULT_FONT_SIZE}rem;
  width: ${({ size }) => size / DEFAULT_FONT_SIZE}rem;
  ${({ hasStroke }) =>
    hasStroke ? "stroke: currentColor" : "fill: currentColor"};
`;

const Icon: React.FC<IconProps> = ({
  data,
  id,
  onClick,
  onMouseLeave,
  onMouseOver,
  onMouseEnter,
  ...props
}) => {
  const renderSVGContent = () => {
    const { svgCircle, svgRectangle, svgPaths, stroke } = data;

    const content = [];
    if (svgCircle) {
      content.push(
        <circle
          key="circle"
          cx={svgCircle.origin}
          cy={svgCircle.origin}
          r={svgCircle.radius}
        />
      );
    }
    if (svgRectangle) {
      content.push(
        <rect
          key="rect"
          style={svgRectangle.style}
          x={svgRectangle.originX}
          y={svgRectangle.originY}
          height={svgRectangle.height}
          width={svgRectangle.width}
        />
      );
    }
    if (!!svgPaths) {
      if (!!stroke) {
        data.svgPaths.map((svgPath, i) =>
          content.push(
            <path
              key={`path-${i}`}
              d={svgPath.d}
              fillRule={svgPath.fillRule}
              clipRule={svgPath.clipRule}
              strokeWidth={stroke!.width}
              strokeLinecap={stroke!.lineCap}
              strokeLinejoin={stroke!.lineJoin}
            />
          )
        );
      } else {
        svgPaths.map((svgPath, i) =>
          content.push(
            <path
              key={`path-${i}`}
              fill={svgPath.fill}
              d={svgPath.d}
              fillRule={svgPath.fillRule}
              clipRule={svgPath.clipRule}
            />
          )
        );
      }
    }

    return content;
  };

  return (
    <StyledSvg
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      size={data.size}
      viewBox={`0 0 ${data.size} ${data.size}`}
      hasStroke={!!data.stroke ? true : false}
      fill={!!data.stroke ? "none" : undefined}
      id={id}
      {...props}
    >
      {renderSVGContent()}
    </StyledSvg>
  );
};

export default Icon;

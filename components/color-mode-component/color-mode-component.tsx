"use client";

import { ReactElement, Children, cloneElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";

type ColorModeComponentProps = {
  firstColor: string;
  secondColor: string;
  isHover?: boolean;
  mainStyles: { [key: string]: string | null };
  styles?: { [key: string]: string | number };
  children: ReactElement | ReactElement[];
};

const ColorModeComponent = ({
  firstColor,
  secondColor,
  isHover,
  mainStyles,
  styles,
  children,
}: ColorModeComponentProps) => {
  const property = Object.keys(mainStyles)[0];
  const propertyValue = mainStyles[property] || "";

  const colors = useColorModeValue(firstColor, secondColor);

  if (isHover) {
    const defaultStyle = {
      [property]: propertyValue,
      ...styles,
    };
    const hoverStyle = {
      [property]: colors,
      ...styles,
    };

    const handleMouseEnter = (event: React.MouseEvent) => {
      const target = event.currentTarget as HTMLElement;

      Object.assign(target.style, hoverStyle);
    };
    const handleMouseLeave = (event: React.MouseEvent) => {
      const target = event.currentTarget as HTMLElement;

      Object.assign(target.style, defaultStyle);
    };

    return Children.map(children, (child: ReactElement) => {
      return cloneElement(child, {
        style: defaultStyle,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      });
    });
  } else {
    const childStyle = {
      [property]: `${propertyValue} ${colors}`,
      ...styles,
    };

    return Children.map(children, (child: ReactElement) => {
      return cloneElement(child, { style: childStyle });
    });
  }
};

export default ColorModeComponent;

"use client";

import { ReactElement, Children, cloneElement } from "react";
import { ModeComponentType } from "components/color-mode-component/mode-component-type";
import { useColorModeValue } from "@chakra-ui/react";

const HoverModeComponent = ({
  firstColor,
  secondColor,
  mainStyle,
  styles,
  children,
}: ModeComponentType) => {
  const property = Object.keys(mainStyle)[0];
  const propertyValue = mainStyle[property];

  const defaultStyle = {
    [property]: propertyValue,
    ...styles,
  };

  const hoverStyle = {
    [property]: useColorModeValue(firstColor, secondColor),
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
};

export default HoverModeComponent;

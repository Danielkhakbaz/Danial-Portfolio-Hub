"use client";

import { ReactElement, Children, cloneElement } from "react";
import { ModeComponentType } from "components/color-mode-component/mode-component-type";
import { useColorModeValue } from "@chakra-ui/react";

const ColorModeComponent = ({
  firstColor,
  secondColor,
  mainStyle,
  styles,
  children,
}: ModeComponentType) => {
  const property = Object.keys(mainStyle)[0];
  const propertyValue = mainStyle[property];

  const childStyle = {
    [property]: `${propertyValue} ${useColorModeValue(
      firstColor,
      secondColor
    )}`,
    ...styles,
  };

  return Children.map(children, (child: ReactElement) => {
    return cloneElement(child, { style: childStyle });
  });
};

export default ColorModeComponent;

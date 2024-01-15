"use client";

import { ReactElement, Children, cloneElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";

type ColorModeComponentProps = {
  firstColor: string;
  secondColor: string;
  mainStyle: { [key: string]: string };
  styles?: { [key: string]: string };
  children: ReactElement | ReactElement[];
};

const ColorModeComponent = ({
  firstColor,
  secondColor,
  mainStyle,
  styles,
  children,
}: ColorModeComponentProps) => {
  const property = Object.keys(mainStyle)[0];
  const propertyValue = mainStyle[property];

  const childStyle = {
    [property]: `${propertyValue} ${useColorModeValue(
      firstColor,
      secondColor
    )}`,
    ...(styles || {}),
  };

  return Children.map(children, (child: ReactElement) => {
    return cloneElement(child, { style: childStyle });
  });
};

export default ColorModeComponent;

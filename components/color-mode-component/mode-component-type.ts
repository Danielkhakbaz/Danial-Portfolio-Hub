import { ReactElement } from "react";

export type ModeComponentType = {
  firstColor: string;
  secondColor: string;
  mainStyle: { [key: string]: string | undefined };
  styles?: { [key: string]: string | number };
  children: ReactElement | ReactElement[];
};
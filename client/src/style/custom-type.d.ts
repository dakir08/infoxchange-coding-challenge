import "@emotion/react";
import "react";
import { Interpolation, Theme } from "@emotion/react";

// declare module "@emotion/react" {
//   export interface Theme extends CustomTheme {}
// }

declare module "react" {
  interface Attributes {
    css?: Interpolation<Theme>;
  }
}

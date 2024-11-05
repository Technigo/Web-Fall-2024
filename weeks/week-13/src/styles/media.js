import { theme } from "./theme"

export const media = {
  mobile: `(max-width: ${theme.breakpoints.mobile})`,
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  desktop: `(min-width: ${theme.breakpoints.desktop})`
}

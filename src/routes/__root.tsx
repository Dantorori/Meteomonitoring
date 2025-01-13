import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-style: normal;
  border: none;
  outline: none;
}
html{
  font-size: 16px;
}
`;
export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});

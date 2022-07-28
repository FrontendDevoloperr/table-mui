import GlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStylesComponent = () => (
  <GlobalStyles
    styles={{
      "*": { margin: "0", padding: "0", boxSizing: "border-box" },
      body: { maxWidth: "1920px", margin: "0 auto" },
    }}
  />
);

import GlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStylesComponent = () => (
  <GlobalStyles
    styles={{
      "*": { margin: "0", padding: "0", boxSizing: "border-box" },
      body: {
        backgroundColor: "#F5F5F5",
      },
    }}
  />
);

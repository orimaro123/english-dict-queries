import { css } from "@emotion/react";

export const divTitleCss = css({
  color: "#4183f2",
  letterSpacing: "0.5px",
  lineHeight: "40px",
});

export const wordCss = css({
  fontSize: "18px",
  textTransform: "uppercase",
  fontWeight: "bold",
});

export const inputCss = css({
  borderRadius: "5px",
  boxShadow: "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",
  width: "100%",
  padding: "10px",
  outline: "0",
});

export const buttonCss = css({
  padding: "15px 0",
  width: "25%",
  backgroundColor: "#ae9cff",
  border: "solid 1px black",
  outline: "none",
  color: "white",
  borderRadius: "5px",
  boxShadow: "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus": {
    outline: "none",
  },
});

export const searchDivCss = css({
  display: "flex",
});

export const headerCss = css({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10px",
  paddingBottom: "15px",
  backgroundColor: "#82f0ae",
});

export const sectionCss = css({
  display: "flex",
 
  marginTop: "25px",

  boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5)",
  padding: "0 6em", width: "30rem", height: "35rem"
});

export const articleCss = css({
  display: "flex",
  flexDirection: "column",

  gap: "2rem",
  marginTop: "18px",
  marginLeft:"20px"
});

import { styled } from "../../stitches.config";

export const TextSizes = {
  h1: {
    fontFamily: "$serif",
    fontSize: "3.5rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h2: {
    fontFamily: "$serif",
    fontSize: "3rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h3: {
    fontFamily: "$serif",
    fontSize: "2.75rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h4: {
    fontFamily: "$serif",
    fontSize: "2rem",
    lineHeight: "1.2",
    marginBottom: "$small",
  },
  h5: {
    fontSize: "calc($default * 1.1)",
    lineHeight: "calc($default * 0.95)",
    marginBottom: "$small",
  },
  h6: {
    fontSize: "$default",
    lineHeight: "calc($default * 0.95)",
    marginBottom: "$small",
  },
  li: {
    listStylePosition: "inside",
    marginBottom: "$smaller",
  },
  strong: {
    fontWeight: "bold",
  },
  ol: {
    marginBottom: 0,
  },
  p: {
    fontFamily: "$default",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  small: {
    display: "block",
    fontSize: "calc($default * 0.9)",
    lineHeight: "calc($default * 0.95)",
    marginBottom: "$smaller",
  },
  span: {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
  },
  ul: {
    marginBottom: 0,
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },
  color: "$text",
  variants: {
    accent: {
      true: {
        color: "$accent",
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;

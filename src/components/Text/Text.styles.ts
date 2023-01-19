import { styled } from "../../stitches.config";

export const TextSizes = {
  h1: {
    fontFamily: "$serif",
    fontSize: "3.4rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h2: {
    fontFamily: "$serif",
    fontSize: "3.1rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h3: {
    fontFamily: "$serif",
    fontSize: "2.5rem",
    lineHeight: "1.2",
    marginBottom: "$medium",
  },
  h4: {
    fontFamily: "$serif",
    fontSize: "2.1rem",
    lineHeight: "1.2",
    marginBottom: "$small",
  },
  h5: {
    fontSize: "1.7rem",
    lineHeight: "1.3",
    marginBottom: "$small",
  },
  h6: {
    fontSize: "1.5rem",
    lineHeight: "1.3",
    marginBottom: "$small",
  },
  li: {
    listStylePosition: "inside",
    marginBottom: "$smaller",
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
    fontSize: "1.4rem",
    lineHeight: "1.3",
    marginBottom: "$smaller",
  },
  span: {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
  },
  strong: {
    fontWeight: "bold",
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

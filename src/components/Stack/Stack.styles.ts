import { styled } from "../../stitches.config";
import { TextStyled } from "../Text/Text.styles";

export const StackRowStyled = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  width: "100%",
});

export const StackColumnStyled = styled("div", {
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingLeft: "$small",
  paddingRight: "$small",
  phone: {
    paddingLeft: "$smaller !important",
    paddingRight: "$smaller !important",
  },

  width: "100%",
});

export const StackElementStyled = styled("div", {
  marginBlockEnd: 0,
  marginBlockStart: 0,

  variants: {
    flexduo: {
      true: {
        [`& ${TextStyled}`]: {
          marginBottom: "0 !important",
          verticalAlign: "middle",
        },
        alignItems: "center",
        display: "flex",
        gap: "$small",
        justifyContent: "space-between",
        verticalAlign: "middle",
      },
    },
  },
});

export default StackElementStyled;

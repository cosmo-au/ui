import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const DialogStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogOverlayStyled = styled("div", {
  backgroundColor: "rgba(147, 148, 161, 0.3)",
  bottom: 0,
  left: 0,
  overflowY: "scroll",
  position: "fixed",
  right: 0,
  top: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100vw",
  zIndex: "$dialog",
});

export const DialogContentStyled = styled("div", {
  backgroundColor: "$background",
  borderRadius: "$small",
  boxShadow: "$large",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$large",
  phone: {
    maxWidth: "90%",
    minWidth: "90%",
    padding: "calc($large - $small) $medium",
  },
  position: "fixed",
  textAlign: "left",
  transition: "$default",

  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
});

export const DialogExitStyled = styled("div", {
  cursor: "pointer",
  padding: "$smaller",
  position: "absolute",
  right: 0,
  top: 0,
});

export default DialogStyled;

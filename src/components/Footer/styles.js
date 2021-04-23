import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    //  background: "var(--color-slate-dark)",
    borderTop: "4px solid var(--color-blue-light)",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "200px",
    width: "200px",
    cursor: "pointer",
    "&:hover": {
      animation: "color-rotate 1s",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
    },
  },
  iconSection: {
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  lorem: {
    color: "var(--color-grey-dark)",
  },
  iconContainer: { display: "flex", justifyContent: "center" },
  icon: {
    fontSize: "calc(100% + 25px)",
    cursor: "pointer",
    color: "var(--color-blue-light)",
    transition: "0.2s",
    margin: "0",
    "&:hover": {
      transform: "scale(1.2)",
      animation: "color-rotate 1s",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
    },
  },
}));

import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%",
  },
  container: {
    marginTop: "130px",
  },
  firstTitle: {
    fontWeight: "600",
    color: "var(--color-slate-dark)",
  },
  secondTitle: {
    color: "var(--color-blue-light)",
    fontWeight: 800,
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    "&:hover": {
      backgroundColor: "var(--color-blue-light)",
      color: "white",
    },
  },
}));

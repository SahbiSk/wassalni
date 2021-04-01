import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    marginTop: "4vh",
    padding: "5vh",
  },
  title: {
    fontWeight: "400",
    paddingBottom: "4vh",
    color: "var(--color-blue-dark)",
  },
  cardContainer: {
    marginTop: "4vh",
  },
  card: {
    padding: "10vh 0 0 2vh",
    background: "transparent",
    boxShadow:"none"
  },
  icon: {
    transform: "scale(4)",
    paddingBottom: "1vh",
  },
  iconContent: {
    color: "var(--color-blue-light)",
  },
}));

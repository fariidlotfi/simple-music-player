import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: 155,
    height: 30,
  },
  "@keyframes go-up-down": {
    "0%": { height: 0 },
    "100%": { height: 25 },
  },
  line1: {
    position: "relative",
    width: 5,
    height: 20,
    backgroundColor: "#000",
    animation: `$go-up-down 0.7s infinite alternate`,
  },
  line2: {
    position: "relative",
    width: 5,
    height: 20,
    backgroundColor: "#000",
    animation: `$go-up-down 0.6s infinite alternate`,
  },
  line3: {
    position: "relative",
    width: 5,
    height: 20,
    backgroundColor: "#000",
    animation: `$go-up-down 0.9s infinite alternate`,
  },
  line4: {
    position: "relative",
    width: 5,
    height: 20,
    backgroundColor: "#000",
    animation: `$go-up-down 0.3s infinite alternate`,
  },
  line5: {
    position: "relative",
    width: 5,
    height: 20,
    backgroundColor: "#000",
    animation: `$go-up-down 0.4s infinite alternate`,
  },
});

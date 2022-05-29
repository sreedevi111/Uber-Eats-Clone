import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 2.5,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    margin: 10,
  },
  menuTitle: {
    marginVertical: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
});

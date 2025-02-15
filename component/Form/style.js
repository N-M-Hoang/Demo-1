import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    width: "100%",
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#21a3d0",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconWrapper:{
    height: 44,
    width: 44,
    backgroundColor:"#21a3d0",
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#eff7f8',
  },
  icon:{
   fontSize: 24,
   color: '#fff',
  },
});
export default styles;

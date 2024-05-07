import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    items: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
      
        alignItems: "center",
        justifyContent: "center",
      },
      even:{
        backgroundColor: '#55f253',
      },
      odd:{ 
        backgroundColor: "#53d6f2",
      },
      number: {
        fontWeight: "700",
        fontSize: 16,
        color: "#fff",
      },
      content: {
        width: "80%",
        fontSize: 16,
      },
    }) 
export default styles;
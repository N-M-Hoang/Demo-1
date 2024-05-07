import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import  Task from './component/Task';
import Form from './component/Form';
import styles from './App.component.style';
export default function App() {
  const [taskList, setTaskList] = useState([])
const handleAddTask =(task) => {
setTaskList([...taskList, task]);
}
  const handleDeleteTask =(index) =>{
    Alert.alert(
      "Thông báo",
      "Bạn có chắc muốn xóa",
[
  
  {
    text:"Ok",
    onPress: () => {
      let taskListTmp =[...taskList];
      taskListTmp.splice(index, 1);
      setTaskList(taskListTmp);
    },
  
  },
  {
    text: "Cancel",onPress: () => {},
  }
]
    )
  }
    return (
      <View style={styles.container}>
       
        <View style={styles.body}>
          <Text style={styles.header}>Todo List</Text>
          <ScrollView style={styles.item}>
          {
          taskList.map((item, index )=>{
          return <Task key={index} title={item} number={index+1} onDeleteTask={()=> handleDeleteTask(index)} />
          })
         }
         
         
          </ScrollView>
        </View>
       <Form onAddTask={handleAddTask}/>
      </View>
    );
  }




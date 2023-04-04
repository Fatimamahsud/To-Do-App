import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Image,TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Task from "./Components/Task"

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState([1]);
  const [index, setIndex] = useState();

  const incrementCount = () => {
    return setCount(count + 1);
  };
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const additem = () => {
    setList([...list, {key: Math.random().toString(), data: item}]);
    setItem('');
    Keyboard.dismiss();
  };

  const editItem = (index, Text) => {
    setEdit(1);
    const Text = [...data];
    newData[index] = {...newData[index], text: Text};
    setData(newData);
    setText('');
   
  };


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.sectionTitle}>To Do List</Text>
        </View>  
        <View style={styles.main}>
        <TextInput style={styles.input} placeholder={'Enter an Item'} placeholderTextColor="black" value={task} onChangeText={text => setTask(text)} />
       {/* <Text styles={ styles.text}>Enter an Item</Text> */}
       <Image source={require('./assets/down.png')}
       style={{width: 25, height:25,marginTop:40,marginLeft:-80}} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add Item</Text>
          </View>
        </TouchableOpacity>
        
        </View>
      <ScrollView >
      <View style={styles.tasksWrapper}>    
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <View>
                
                <TouchableOpacity >
                  <Task text={item} number = {`${index+1}`} /> 
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)} style={styles.remove}>            
                </TouchableOpacity>   
                <TouchableOpacity key={index}  onPress={''} style={styles.removee}>            
                <Text >
                  Edit this To Do
                </Text>
                </TouchableOpacity>        
                </TouchableOpacity >
                </View>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper: {
    // paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor:'white'

  },
  header: {
    backgroundColor:'#55BCF6',
    height:90,
    alignItems:'center',
    justifyContent:'center',

  },
  main: {
    backgroundColor:'white',
    height:90,
    flexDirection:'row',
    justifyContent:'space-between'
    // alignItems:'center',
    // justifyContent:'center',

  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color:'white',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: 'black',
    color:'black',
    borderWidth: 1,
    width: 250,
    height:70,
    marginLeft:20,
    marginTop:20,
  },
  addWrapper: {
    width: 100,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:40,
    marginTop:30,
  },
  addText: {
    color:'white'
  },
  edit:{
    height:40,
    width:60,
    backgroundColor:'black',
    margin:20,
  },
  remove:{
    height:100,
    width:60,
    backgroundColor:'transparent',
    marginTop:-90,
    marginLeft:350
  },
  removee:{
    height:40,
    width:100,
    backgroundColor:'#55BCF6',
    marginTop:-20,
    margin:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  }

});

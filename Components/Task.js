import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';


const Task = (props) => {
    const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    
    <View style={styles.item}>

      <View style={styles.itemLeft}>
        <View style={styles.square}>
            <Text style={styles.numberText}>
                {props.number}
            </Text>
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>
        <TouchableOpacity></TouchableOpacity>
      <Image source={require('../assets/deletee.png')}
       style={{width: 30, height:30}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderColor:'black',
    borderWidth:2
    
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    marginRight: 15,
    alignItems:'center'
  },
  itemText: {
    maxWidth: '80%',
    color:'black'
  },
  numberText: {
    color:'white',
    fontSize:25
    
  },
  circular: {
    width: 22,
    height: 22,
    margin:10,
  },
});

export default Task;
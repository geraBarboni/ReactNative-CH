import { useState } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';


const List = (props) => {

  const {onHandlerModal,itemList} = props

  const [check, setcheck] = useState(false)

  const onHandlerCheck = () => {
    setcheck(!check)
  }

  return (
    <FlatList 
    data={itemList}
    renderItem={data => (
      <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
        <Text style={check?{color: '#34D399', textDecorationLine: 'line-through'} : {color: '#38BDF8'}}>{data.item.value}</Text>
        <TouchableOpacity onPress={() => onHandlerCheck()} style={styles.itemComplete}>
            <Text style={styles.textCheck}>✓</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
  />
  )
}

export default List

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: '#292524',
      borderColor: '#38BDF8',
      borderRadius: 5,
      marginTop: 20,
      paddingLeft: 10,
      height: 45,
    },
    text:{

    },
    textCheck:{
      color: '#38BDF8',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    itemComplete: {
      borderWidth: 1,
      borderColor: '#38BDF8',
      borderRadius: 3,
      margin: 5,
      height: 30,
      width: 30,
    }
  })
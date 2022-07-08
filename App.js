import { StyleSheet, View, TextInput, Text, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react'
import CustomModal from './components/CustomModal';
import { AddItem } from './components/AddItem';
import List from './components/List';

export default function App( ) {
    
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text)
  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem}])
    setTextItem('')
  } 

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.screen}>
      <CustomModal onHandlerModal={onHandlerModal}  modalVisible={modalVisible} onHandlerDeleteItem={onHandlerDeleteItem} itemSelected={itemSelected}/>
      <AddItem textItem={textItem} onHandlerChangeItem={onHandlerChangeItem} onHandlerAddItem={onHandlerAddItem}/>
      <List itemList={itemList} onHandlerModal={onHandlerModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: '13%',
    padding: 30,
    backgroundColor: '#111827',
    height: '100%'
  },
})
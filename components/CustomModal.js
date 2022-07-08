import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const CustomModal = (props) => {
    const {modalVisible, onHandlerDeleteItem, itemSelected, onHandlerModal } = props

  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
    >
        <View style={styles.modal}>
            <View style={styles.modalView}>
                <View style={styles.buttonView}>
                  <Button style={styles.closeButton} onPress={() => onHandlerModal(itemSelected.id)} title='x'/>
                </View>
                <Text style={styles.textTitle}>Estas seguro que desea borrar?</Text>
                <Text style={styles.textItem}>{itemSelected.value}</Text>
                <Button style={styles.button} onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
            </View>
        </View>
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },  
    modalView: {
      backgroundColor: '#1E3A8A',
      width: '80%',
      height: '30%',
      borderRadius: 5,
      padding: '5%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
    },
    buttonView:{
      width: '12%',
      marginLeft:'auto',
      marginRight:20,
      marginBottom:-25,
    },
    textTitle:{
      fontSize: 20
    },
    textItem: {
      fontSize: 16
    },
    button:{
      width: '70%',
    }
  })
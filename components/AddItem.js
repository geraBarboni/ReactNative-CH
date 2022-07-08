import { View, TextInput, Text, Button , StyleSheet } from 'react-native';

export const AddItem = (props) => {
    const {textItem, onHandlerChangeItem, onHandlerAddItem} = props
  return (
  <View>
    <TextInput 
      placeholder='Escribe aqui' 
      placeholderTextColor='#38BDF8'
      style={styles.input} 
      value={textItem}
      onChangeText={onHandlerChangeItem}  
    />
    <Button  
      title='Add' 
      style={styles.button} 
      onPress={onHandlerAddItem} 
      disabled={textItem.length < 1 ? true : false}>
        <Text style={styles.text}>Add</Text>
      </Button >
  </View>
  )
}

const styles = StyleSheet.create({
    input: {
      width: '100%',
      marginBottom: 15,
      height: 40,
      borderColor: '#38BDF8',
      borderRadius: 5,
      borderWidth: 1,
      color: '#38BDF8',
      paddingLeft: 10,
    },
    button: {
      borderRadius: 5,
      height: 40,
    },
    text: {
      display: 'flex',
      width: 25,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
})
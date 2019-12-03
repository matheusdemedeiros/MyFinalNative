import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


class Listagem extends React.Component{

  constructor(props){
    super(props);
    this.props.navigation;
  }

  static navigationOptions = {
    title: 'Listagem'
  }
  
  render(){
    const {navigation} = this.props;
    return (
  
      <View style={styles.container}>
        
        <Text style={styles.title}>Repositórios</Text>
        
        <TextInput style={styles.input} placeholder=" Informe o seu nome"></TextInput>
        <TextInput style={styles.input} placeholder=" Informe a sua senha"></TextInput>
              
        <View style={styles.buttons}>
        
          <TouchableOpacity style={styles.buttonConfirm}  onPress={this.onPress}>
            <Text style={styles.textButton}>Confirmar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAdd}  onPress={this.onPress}>
            <Text style={styles.textButton}>Cadastrar-se agora</Text>
          </TouchableOpacity>

        </View>
      
      </View>
    );

  }
}

export default Listagem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color:'white'
  },
  input:{
    marginTop:10,
    height: 50,
    width:380,
    backgroundColor:'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6
  },
  buttonConfirm:{
    marginTop: 20,
    height: 50,
    width: 150,
    backgroundColor:"#9D5DFF",
    borderColor: 'black',
    borderWidth: 2,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 6
  },
  buttonAdd:{
    marginTop: 20,
    height: 50,
    width: 230,
    backgroundColor:"#9D5DFF",
    borderColor: 'black',
    borderWidth: 2,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 6
  },

  textButton:{
    fontSize:20,
    color: "white"
  },

  buttons:{
    alignItems:"center"
  }

});






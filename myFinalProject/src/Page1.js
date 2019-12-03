import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class Cadastro extends React.Component{

  constructor(props){
    super(props);
    this.props.navigation;
    this.state = {
      nome: '',
      userGit:'',
      senha:'',
      confirmSenha:''
    }  
  }
  

  static navigationOptions = {
    title: 'Cadastro'
  }
  
  render(){
    const {navigation} = this.props;
    return (
  
      <View style={styles.container}>
        
        <Text style={styles.title}>Cadastro</Text>
        

        <TextInput 
        style={styles.input}
        placeholder=" Informe o seu nome"
        value={this.state.nome}
        onChangeText={() => this.state.nome = value}
        >
        
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder=" Informe o seu username GIT">
        </TextInput>

        <TextInput 
        style={styles.input}
        placeholder=" Defina uma senha">
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder=" Confirme a senha">
        </TextInput>
              
        <View style={styles.buttons}>
        
          <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => alert.alert(this.state.nome)}
          //onPress={() => this.props.navigation.navigate('Listagem')}
          >
            <Text
            style={styles.textButton}>Confirmar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonClear}
          onPress={this.onPress}>
            <Text
            style={styles.textButton}>Limpar Campos
            </Text>
          </TouchableOpacity>

        </View>
      
      </View>
    );

  }
}

export default Cadastro;

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
  buttonClear:{
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






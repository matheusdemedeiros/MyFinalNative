import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';


var ip = '192.168.56.1';

class Inicial extends React.Component{

  constructor(props){
    super(props);
    this.props.navigation;
    this.state = {
      nome: '',
      senha: ''
    }
  }

  //INSERCAO DOS DADOS
  login = () =>{
    
    var nome = this.state.nome;
    var senha = this.state.senha;
      if(this.state.nome != "" && this.state.senha != ""){
        fetch('http://'+ip+'/programas/2019_II_POO/app/insert.php',{
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                senha: senha                
            })
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            Alert.alert(json);
            this.setState({nome:''});
            this.setState({senha:''});
            })
    }else{
        Alert.alert('Preencha os dados!');
    }
}

  static navigationOptions = {
    title: 'Inicial'
  }
  
  render(){
    const {navigation} = this.props;
    return (
      
      <View style={styles.container}>
        
        <Text style={styles.title}>Bem vindo ao App</Text>
        
        <TextInput style={styles.input} placeholder=" Informe o seu nome"
        onChangeText={nome => this.setState({nome})}
        value = {this.state.nome}
        ></TextInput>
        <TextInput style={styles.input} placeholder=" Informe a sua senha"
        onChangeText={senha => this.setState({senha})}
        value = { this.state.senha}
        ></TextInput>
              
        <View style={styles.buttons}>
        
          <TouchableOpacity style={styles.buttonConfirm} 
          //() => this.props.navigation.navigate('Cadastro') 
          onPress={this.login}>
            <Text style={styles.textButton}>Confirmar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAdd}  onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={styles.textButton}>Cadastrar-se agora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAdd}  onPress={() => this.props.navigation.navigate('Listagem')}>
            <Text style={styles.textButton}>Listagem</Text>
          </TouchableOpacity>

        </View>
      
      </View>
    );
 
  }
}

export default Inicial;

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






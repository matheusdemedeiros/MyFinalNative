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

  //LIMPAR CAMPOS
  limparCampos = () =>{
    this.setState({nome:''});
    this.setState({senha:''});
    this.setState({userGit:''});
    this.setState({confirmSenha:''});
  }

  
   //INSERCAO DOS DADOS
   insercaoUsuarios = () =>{
    
    var nome = this.state.nome;
    var senha = this.state.senha;
    var userGit = this.state.userGit;
    var confirmSenha = this.confirmSenha;

      if(this.state.nome != "" && this.state.senha != "" && this.state.userGit != "" && this.state.confirmSenha != ""){
        if(this.state.confirmSenha == this.state.senha){
        fetch('http://localhost/app/insertUser.php',{
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                senha: senha,
                userGit: userGit,
              })
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            Alert.alert(json);
            this.setState({nome:''});
            this.setState({senha:''});
            this.setState({userGit:''});
            this.setState({confirmSenha:''});
            })
          }else{
            Alert.alert('As senhas devem ser iguais!!');
          }
    }else{
        Alert.alert('Preencha os dados!');
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
        onChangeText={nome => this.setState({nome})}
        >
        
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder=" Informe o seu username GIT"
        onChangeText={userGit => this.setState({userGit})}
        value={this.state.userGit}
        >
        </TextInput>

        <TextInput 
        style={styles.input}
        placeholder=" Defina uma senha"
        onChangeText={senha => this.setState({senha})}
        value={this.state.senha}
        >
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder=" Confirme a senha"
        onChangeText={confirmSenha => this.setState({confirmSenha})}
        value={this.state.confirmSenha}        
        >
        </TextInput>
              
        <View style={styles.buttons}>
        
          <TouchableOpacity
          style={styles.buttonConfirm}
          //onPress={() => alert.alert(this.state.nome)}
          onPress={this.insercaoUsuarios}
          >
          <Text
            style={styles.textButton}>Confirmar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonClear}
          onPress={this.limparCampos}>
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






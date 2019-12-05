import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, ListItem } from 'react-native';


class Listagem extends React.Component {

  constructor(props) {
    super(props);
    this.props.navigation;
    this.state = {
      vetor:[]
    };
  }

  static navigationOptions = {
    title: 'Listagem'
  }

  selecao = () => {
    var nomeRepo = '';
    fetch('https://api.github.com/users/matheusdemedeiros/repos')
    .then(response => {
        let data = response.json();
        return data;
        
    })
    .then(json => {
      this.setState({vetor : json});
    })
}
   

  render() {
    const { navigation } = this.props;
    return (
      
      
      <View style={styles.container}>
        
        <Text style={styles.title}>Repositórios</Text>

        <FlatList style={styles.containerListBox} data={this.state.vetor}
        renderItem={({ item }) => 
          <View style={styles.listBox}>
            <Text style={styles.textBox}>{item.id}</Text>
            <Text style={styles.textBox}>{item.name}</Text>
          </View>
          
        }></FlatList>


        <View style={styles.buttons}>

          <TouchableOpacity style={styles.buttonConfirm} onPress={this.selecao}>
            <Text style={styles.textButton}>Listar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAdd} onPress={this.onPress}>
            <Text style={styles.textButton}>Cadastrar-se agora</Text>
          </TouchableOpacity>

        </View>

      </View>

  
    );

  }
}

export default Listagem;

const styles = StyleSheet.create({
  containerListBox:{
    width: "80%",
    
  },

  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10
  },
  input: {
    marginTop: 10,
    height: 50,
    width: 380,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6
  },
  buttonConfirm: {
    marginTop: 20,
    height: 50,
    width: 150,
    backgroundColor: "#9D5DFF",
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  buttonAdd: {
    marginTop: 20,
    height: 50,
    width: 230,
    backgroundColor: "#9D5DFF",
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },

  textButton: {
    fontSize: 20,
    color: "white"
  },

  buttons: {
    alignItems: "center"
  },

  listBox: {
    textAlign: "right",
    backgroundColor: 'white',
    marginTop: 15,
    height: 130,
    width: "95%",
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: 5,
    flexDirection: "row"


  },
  textBox:{
    fontSize: 18,
    marginLeft: 5,
  },



});






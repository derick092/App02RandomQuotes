//import
import React from 'react'
import { Text, AppRegistry, View, Image, Button, TouchableOpacity, Alert } from 'react-native'

//estilos
const Estilos = {
  vwPrincipal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  toNovaFrase:{
    backgroundColor:'#538530',
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20
  },
  txNovaFrase:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }
};

const opGerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  var frases = Array();
  frases[0] = 'Frase 01';
  frases[1] = 'Frase 02';
  frases[2] = 'Frase 03';
  frases[3] = 'Frase 04';
  frases[4] = 'Frase 05';

  Alert.alert(frases[numeroAleatorio]);
};

//componente
const App = () => {
  const { vwPrincipal, toNovaFrase, txNovaFrase} = Estilos;
  return(
    <View style = {vwPrincipal}>
      <Image source={require('./imgs/logo.png')}/>
      <TouchableOpacity
        onPress={opGerarNovaFrase}
        style={toNovaFrase}>
        <Text style={txNovaFrase}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//renderizar
AppRegistry.registerComponent('app02', () => App);

/*botao:{
  backgroundColor:'#FFF',
  padding:10,
  borderColor:'#1D8EB8',
  borderWidth:3,
  borderRadius:8,
  shadowColor:'#000',
  shadowOffset:{width:  0, height: 2},
  shadowOpacity:0.4
},
textoBotao:{
  color:'#488BBC',
  fontSize:16,
  fontWeight:'bold',
  alignSelf:'center'
}*/

/*principal:{
  backgroundColor:'cornflowerblue',
  flex:1,
},
topo:{
  backgroundColor:'brown',
  flex:2,
},
conteudo:{
  backgroundColor:'yellowgreen',
  flex:8,
},
rodape:{
  backgroundColor:'orangered',
  flex:1,
}*/



/*estiloTexto: {
  fontSize: 30,
  backgroundColor: '#08059B',
  height:60,
  width:60
},
estiloTexto2: {
  fontSize: 30,
  backgroundColor: '#2A48FA',
  height:60,
  width:60
},
estiloView: {
  backgroundColor: 'skyblue',
  height:300,
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'column'
}*/

/*
center, flex-start, flex-end
shadowColor:'#000',
shadowOffset: {width:5, height:5},
shadowOpacity: 1,
shadowRadius: 0.5,
fontWeight: 'bold',
textAlign: 'center',
fontStyle: 'italic',
textDecorationLine: 'underLine,'
color: '#FFF',
margin: 5,
padding: 5*/

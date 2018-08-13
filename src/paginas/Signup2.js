import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image, Dimensions} from 'react-native';
import Form from '../componentes/Formsignup2'
import {Actions} from 'react-native-router-flux';

import styles from '../styles';

var { height,width } = Dimensions.get('window');

export default class Signup2 extends React.Component {

login(){
  Actions.login()
}

render(){
  return(
    <ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
      <View>        
        <View style={[style.box]}>
            <Text style={style.textmenu}>REGISTRO</Text> 
            <Image
              source={require('../imagenes/logo.png')}
              style={style.logoImagen}/>
        </View>				  
        <Form nombre={this.props.nombre} apellido = {this.props.apellido} 
          email= {this.props.email}
          telefono= {this.props.telefono} 
          password= {this.props.password} />        
      </View>
    </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,    
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F0DFCB',   
  },  
   box: {
    height: 100,
    width: width,    
    flexGrow: 1,    
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row',
    backgroundColor: '#f5f5f5', 
  },
  textmenu: {
    width:width - 100,
    height: 40, 
    fontSize:30,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius:2,
    textShadowOffset: {width: 2,height: 2} 
  },
  logoImagen:{    
    width: 100,
    height: 30,  
    resizeMode: "contain",        
  },

});
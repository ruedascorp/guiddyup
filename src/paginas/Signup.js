import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground, Dimensions, Image } from 'react-native';
import Form from '../componentes/Formsignup'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';

var { height,width } = Dimensions.get('window');

var box_count = 7;
var box_height = height / box_count;

export default class Signup extends React.Component {

  login(){
    Actions.login()
  }

  render(){
    return(
      <ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
        <View > 
          <View style={[style.box]}>
              <Text style={style.textmenu}>REGISTRO</Text> 
              <Image
                source={require('../imagenes/logo.png')}
                style={style.logoImagen}/>
          </View>         
          <Form type="Signup"/>
          <View style={styles.signupTextcont}>
            <Text>¿Ya tienes una cuenta? </Text>
                <TouchableOpacity onPress={this.login}><Text style={styles.signupText}> Iniciar Sesión.</Text></TouchableOpacity>           
          </View>
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
    height: 40,
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
    textShadowOffset: {width: 2,height: 2},
    textAlign: 'center'
  },
  logoImagen:{    
    width: 100,
    height: box_height-40,
    resizeMode: "contain",    
    
  },
});
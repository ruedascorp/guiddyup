import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styleall from '../styles';

var { height,width } = Dimensions.get('window');
 
var box_count = 7;
var box_height = height / box_count;

export default class Formmain extends React.Component {

  vehiculo(){

  }

  changehome(){

  }

  renovarcontrato(){

  }

  cambioporfalla(){

  }

  salir(){
    Actions.login()
  }

  terminos(){
    Actions.terminos()
  }


render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
                <Text style={styles.textmenu}>MENÚ</Text> 
                <Image
                  source={require('../imagenes/logo.png')}
                  style={styles.logoImagen}/>
            </View>            
     
            <View style={[styles.box, styles.box2]}>
              <Image
                source={require('../imagenes/vehiculo.png')}
                style={styles.buttonImagen}/>
              <TouchableOpacity style={styles.button} onPress={this.vehiculo}>
              <Text style={styles.buttonText}>VEHÍCULO</Text>
              </TouchableOpacity>
            </View>
      
            <View style={[styles.box, styles.box2]}>
              <Image
                source={require('../imagenes/bus.png')}
                style={styles.buttonImagen}/>
              <TouchableOpacity style={styles.button} onPress={this.changehome}>
              <Text style={styles.buttonText}>CHANGE HOME</Text>
              </TouchableOpacity>
            </View>
      
            <View style={[styles.box, styles.box2]}>
              <Image
                source={require('../imagenes/renovar.png')}
                style={styles.buttonImagen}/>
              <TouchableOpacity style={styles.button} onPress={this.renovarcontrato}>
              <Text style={styles.buttonText}>RENOVAR CONTRATO</Text>
              </TouchableOpacity>
            </View>
      
            <View style={[styles.box, styles.box2]}>
              <Image
                source={require('../imagenes/falla.png')}
                style={styles.buttonImagen}/>
              <TouchableOpacity style={styles.button} onPress={this.cambioporfalla}>
              <Text style={styles.buttonTextf}>
              CAMBIO DE UNIDAD POR FALLA</Text>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.box, styles.box3]}>
              <TouchableOpacity onPress={this.terminos}><Text style={styles.termsText}> 
                TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
              </Text></TouchableOpacity>
            </View>
            
            <View style={[styles.box, styles.box4]}>
              <TouchableOpacity style={styles.button} onPress={this.salir}>
                    <Text style={styles.buttonText}>Salir</Text>
                  </TouchableOpacity> 
            </View>

        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center'
  },
  box: {
    height: box_height,
    width: width,    
    flexGrow: 1,    
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  box1: {        
    backgroundColor: '#f5f5f5',    
  },
  textmenu: {
    width:width - 100,
    height: box_height-40, 
    fontSize:36,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius:2,
    textShadowOffset: {width: 2,height: 2} 
  },
  logoImagen:{    
    width: 100,
    height: box_height-40,  
    resizeMode: "contain",    
    
  }, 
  box2: {
    backgroundColor: 'transparent'
  },
  box3: {
    backgroundColor: 'transparent'
  },
  box4: {
    backgroundColor: 'transparent'
  },
  button:{
    width:width - 100,    
    height: box_height-40,  
    backgroundColor:'#c8b7b5',
    borderRadius: 25,
    marginVertical:20,
    paddingVertical:10,
  },
  buttonImagen:{
    width:100,
    height: box_height-40,  
    resizeMode: "contain",    
    marginVertical:20,
    paddingVertical:10,
  }, 
  buttonText: {
    fontSize:20, 
    fontWeight:'500',
    color:'#F0F0F0',
    textAlign:'center',
    textAlignVertical:'center',    
  },
  buttonTextf: {
    fontSize:16, 
    fontWeight:'500',
    color:'#F0F0F0',
    textAlign:'center',
    textAlignVertical:'center',

  },
  
  termsText:{
    color:'#01579B',
    fontSize:12,
    fontWeight:'500',
  },
});
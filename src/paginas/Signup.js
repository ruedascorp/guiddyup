import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground, Dimensions, Image, BackHandler } from 'react-native';
import Form from '../componentes/Formsignup'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';
import { Header } from 'react-native-elements';
var { height,width } = Dimensions.get('window');


export default class Signup extends React.Component {
  componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Main:: Actions.currentScene-> ' + Actions.currentScene);
		//Actions.signup();
		return false;
	  }
  login(){
    Actions.login()
  }

render(){
  return(
    <ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
      <View style={style.container}>        
      <Header     
        placement="bottom"         
        centerComponent={
          <View style={style.box}>
            <Text style={styles.textmenu}>REGISTRO</Text>           
          </View>
        }        
        rightComponent={
          <View style={{width: 60}}>
          <Image
              source={require('../imagenes/logoi.png')}
              style={styles.logoImagen}/>
          </View>
        }        
        backgroundColor="#fff"
      />
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
    width: width-60,    
    flexGrow: 1, 
    paddingTop:20 ,           
  },
});

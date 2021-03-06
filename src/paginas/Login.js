import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, BackHandler } from 'react-native';
import Logo from '../componentes/Logo'
import Form from '../componentes/Formlogin'
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';


export default class Login extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Main:: Actions.currentScene-> ' + Actions.currentScene);
		Actions.login();
		return true;
	  }

	signup(){		
		Actions.signup()
	}
	
	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
				<View style={styles.statusBar}>
					<Logo/>
					<Form type="Login" />
					<View style={styles.signupTextcont}>
						<Text>¿Aún no tienes una cuenta? </Text>
						<TouchableOpacity onPress={this.signup}><Text style={styles.signupText}> Regístrate.</Text></TouchableOpacity>
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
  },  
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
  },
});
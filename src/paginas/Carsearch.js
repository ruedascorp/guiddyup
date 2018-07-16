import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Form from '../componentes/Formcarsearch'
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';

export default class Login extends React.Component {
	
	signup(){
		Actions.signup()
	}

	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
				<View style={styles.statusBar}>
					<Form/>									
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
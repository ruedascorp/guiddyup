import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Logo from '../componentes/Logo'
import Form from '../componentes/Formmain'
import {Actions} from 'react-native-router-flux';

import styles from '../styles';

export default class Main extends React.Component {	

	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
				<View >										
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
});
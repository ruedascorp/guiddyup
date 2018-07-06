import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles';

export default class Terminos extends React.Component {

	main(){
		Actions.main()
	}

	render(){
		return(		
			<View style={style.container}>	
				<Image
  					source={require('../imagenes/logo.png')}
  					style={{width: 175, height: 153}}/>		

  					<Text>TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD</Text>

  					<View style={styles.signupTextcont}>						
						<TouchableOpacity onPress={this.main}>
							<Text style={styles.signupText}> Regresar.</Text>
						</TouchableOpacity>
					</View>
  					
			</View>
			)
	}
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,    
    justifyContent: 'flex-end',
    alignItems: 'center',    
    },
});

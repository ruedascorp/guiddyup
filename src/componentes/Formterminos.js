import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';

var { height,width } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;

export default class Terminos extends React.Component {

	main(){
		Actions.main()
	}

	render() {
		return (
	
			<View style={styles.container}>                            
				<View style={[styles.box, styles.box2]}>
				<Text style={styles.buttonText}> 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
					TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD TERMINOS DEL SERVICIO Y POLITICAS DE PRIVACIDAD 
				  </Text>
				</View>
						   																
				<View style={[styles.box, styles.box4]}>
				  <TouchableOpacity style={styles.button} onPress={this.main}>
						<Text style={styles.buttonText}>Regresar</Text>
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
		color:'#000000',
		textAlign:'center',
		textAlignVertical:'center',    
	  },
	  buttonTextf: {
		fontSize:16, 
		fontWeight:'500',
		color:'#000000',
		textAlign:'center',
		textAlignVertical:'center',
	
	  },
	  
	  termsText:{
		color:'#01579B',
		fontSize:12,
		fontWeight:'500',
	  },
	});
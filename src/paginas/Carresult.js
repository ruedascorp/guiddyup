import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Form from '../componentes/Formcarresult';
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';

export default class Carresult extends React.Component {
	
	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
				<View>					
					<Form flatListVehiculos={this.props.flatListVehiculos}/>					
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
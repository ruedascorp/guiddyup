import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Form from '../componentes/Formcarselected';
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';

export default class Carselected extends React.Component {
		
	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
			<Text >'ok::'{this.props.transmision1}</Text>

				<View>
					<Form 						
						transmision1={this.props.transmision1} 
						imagen1 = {this.props.imagen1} 
          				cantidad_maletas1= {this.props.cantidad_maletas1}
          				cantidad_pasajeros1= {this.props.cantidad_pasajeros1} 
			            tarifa_dia1= {this.props.tarifa_dia1}
			            arrendadoralogo1= {this.props.arrendadoralogo1}/>									
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
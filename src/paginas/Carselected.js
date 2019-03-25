import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground,Image,Dimensions, BackHandler } from 'react-native';
import Form from '../componentes/Formcarselected';
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';
import { Header } from 'react-native-elements';

var { height,width } = Dimensions.get('window');

export default class Carselected extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Carselected:: Actions.currentScene-> ' + Actions.currentScene);
		
		return false;
	  }
	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
			<Text >'ok::'{this.props.transmision1}</Text>

				<View>
				<Header     
					placement="bottom"         
					centerComponent={
						<View style={style.box}>
							<Text style={styles.textmenu}>SELECCIONADO</Text>           
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
					<Form
						id1= {this.props.id1} 						
						transmision1={this.props.transmision1} 
						imagen1 = {this.props.imagen1} 
          				cantidad_maletas1= {this.props.cantidad_maletas1}
          				cantidad_pasajeros1= {this.props.cantidad_pasajeros1} 
			            tarifa_dia1= {this.props.tarifa_dia1}
			            arrendadoralogo1= {this.props.arrendadoralogo1}
									/>									
				</View>
			</ImageBackground>
			)
	}
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,    
    alignItems: 'center',
		justifyContent: 'flex-end'
	},  	
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
	},
	box: {    
    width: width-60,    
    flexGrow: 1,          
  },

});
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground,BackHandler,Image,Dimensions } from 'react-native';
import Form from '../componentes/FormCambioPorFalla';
import {Actions} from 'react-native-router-flux';
import { Constants } from 'expo';
import styles from '../styles';
import { Header } from 'react-native-elements';

var { height,width } = Dimensions.get('window');

export default class CambioPorFalla extends React.Component {
  componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Carsearch:: Actions.currentScene-> ' + Actions.currentScene);
		Actions.main();
		return true;
	  }
  render(){
    return(
      <ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
        <View>
        <Header     
					placement="bottom"         
					centerComponent={
						<View style={style.box}>
							<Text style={styles.textmenu}>CAMBIO POR FALLA</Text>           
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
          <Form id={this.props.id}/>                 
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
  box: {    
    width: width-60,    
    flexGrow: 1, 
         
  },
});
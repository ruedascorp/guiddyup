import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,Image, ImageBackground, BackHandler } from 'react-native';
import Logo from '../componentes/Logo'
import Form from '../componentes/Formterminos'
import {Actions} from 'react-native-router-flux';
import { Header } from 'react-native-elements';
import styles from '../styles';
var { height,width } = Dimensions.get('window');

export default class Terminos extends React.Component {	
  componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Main:: Actions.currentScene-> ' + Actions.currentScene);
		Actions.main();
		return true;
	  }
	render(){
		return(
			<ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
				<View >		
				<Header     
        placement="bottom"         
        centerComponent={
          <View style={style.box}>
            <Text style={styles.textmenu}>TERMINOS DEL SERVICIO</Text>           
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
	box: {    
    width: width-60,    
    flexGrow: 1, 
    paddingTop:20 ,           
  },  
});
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image, Dimensions, BackHandler} from 'react-native';
import Form from '../componentes/Formsignup2'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';
import { Header } from 'react-native-elements';

var { height,width } = Dimensions.get('window');

var box_count = 7;
var box_height = height / box_count;

export default class Signup2 extends React.Component {
  componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	  }
	
	  handleBackPress = () => {
		//this.goBack(); // works best when the goBack is async
		console.log('Main:: Actions.currentScene-> ' + Actions.currentScene);
		
		return false;
	  }
login(){
  Actions.login()
}

render(){
  return(
    <ImageBackground source={require('../imagenes/back.jpg')} style={style.container}>
      <View>        
      <Header     
        placement="bottom"         
        centerComponent={
          <View style={style.box1}>
            <Text style={styles.textmenu}>REGISTRO</Text>           
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
        <Form nombre={this.props.nombre} apellido = {this.props.apellido} 
          email= {this.props.email}
          telefono= {this.props.telefono} 
          password= {this.props.password} />        
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
    backgroundColor: '#F0DFCB',
  },  
  box: {
    height: 40,
    width: width,    
    flexGrow: 1,    
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row',
    backgroundColor: '#f5f5f5', 
  },
  textmenu: {
    width:width - 100,
    height: 40, 
    fontSize:30,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius:2,
    textShadowOffset: {width: 2,height: 2},
    textAlign: 'center'
  },
  logoImagen:{    
    width: 100,
    height: box_height-40,
    resizeMode: "contain",    
    
  },
  box1: {    
    width: width-60,    
    flexGrow: 1, 
    paddingTop:20 ,           
  },

});

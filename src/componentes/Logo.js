import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
	render(){
		return(		
			<View style={styles.container}>	
				<Image
  					source={require('../imagenes/logo.png')}
  					style={{width: 175, height: 153}}/>		
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,    
    justifyContent: 'flex-end',
    alignItems: 'center',    
    },
});

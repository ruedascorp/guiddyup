import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import Navegacion from './src/Navegacion';

export default class App extends React.Component {
  render() {
StatusBar.setBarStyle('light-content', true);  	
return (
    	
        <View style={styles.container}>                    
          <Navegacion/>          
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
},

});

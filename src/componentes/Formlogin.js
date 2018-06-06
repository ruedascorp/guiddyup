import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux'

export default class Formlogin extends React.Component {

 main(){
    Actions.main()
  }

	render(){
		return(	
      
			<View style={style.container}>			
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Email'
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}/>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password'
          secureTextEntry={true}
          ref={(input) => this.password = input}/>
        <TouchableOpacity style={styles.button} onPress={this.main}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
			</View>
			)
	}
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    },
});

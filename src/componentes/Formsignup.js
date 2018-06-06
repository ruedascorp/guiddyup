import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import styles from '../styles';

export default class Formsignup extends React.Component {
constructor(props) {
    super(props)
    this.state = { 
      nombre: '',
      apellido:'',
      email:'',
      telefono:'',
      password:'',
      passwordr:'' }
  }

  registro2(){
    //if(this.state.passwordr != this.state.password){
     //   Alert.alert('No coincide la contraseña!');
    //}else{
      Actions.signup2(
        'formulario1', {
          nombre: this.nombre
        }
      )  
    //}    
    
  }

  validapass(){
      if(this.state.passwordr != this.state.password){
        Alert.alert('No coincide la contraseña!');
      }
    }

	render(){
		return(		
			<View style={style.container}>			
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Nombre'          
          selectionColor="#fff"         
          ref={(input) => this.nombre = input} 
          value={this.state.nombre}
          onChangeText={(nombre) => this.setState({nombre})}
          onSubmitEditing={()=> this.apellido.focus()}/>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Apellido'        
          selectionColor="#fff"          
          ref={(input) => this.apellido = input}
          onChangeText={(apellido) => this.setState({apellido})}
          value={this.state.apellido}
          onSubmitEditing={()=> this.email.focus()}/>                
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Email'
          selectionColor="#fff"
          keyboardType="email-address"
          ref={(input) => this.email = input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          onSubmitEditing={()=> this.telefono.focus()}/>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Telefono'
          selectionColor="#fff"
          keyboardType="email-address"
          value={this.state.telefono}
          ref={(input) => this.telefono = input}
          onChangeText={(telefono) => this.setState({telefono})}
          onSubmitEditing={()=> this.password.focus()}/>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password'
          secureTextEntry={true}
          ref={(input) => this.password = input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          onSubmitEditing={()=> this.passwordr.focus()}/>         
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Repetir Password'
          secureTextEntry={true}
          ref={(input) => this.passwordr = input}
          onChangeText={(passwordr) => this.setState({passwordr})}
          value={this.state.passwordr}
          onSubmitEditing ={() => this.validapass()}/> 

        <TouchableOpacity style={styles.button} onPress={this.registro2}>
          <Text style={styles.buttonText}>Siguiente</Text>
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
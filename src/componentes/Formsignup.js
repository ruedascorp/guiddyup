import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import styles from '../styles';

export default class Formsignup extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
      nombre: '',
      apellido:'',
      email:'',
      telefono:'',
      password:'',
      passwordr:''
    }
  }




  registro2(){
    //if(this.state.passwordr != this.state.password){
     //   Alert.alert('No coincide la contraseña!');
    //}else{
      console.log('Formsignup: registro2:::' + this.state.nombre);

      Actions.signup2(
         {
          nombre: this.state.nombre,
          apellido: this.state.apellido,
          email: this.state.email,
          telefono: this.state.telefono,
          password: this.state.password,         
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
			<KeyboardAvoidingView style={style.container} behavior="padding" enabled> 	
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
          autoCapitalize = 'none'
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
          autoCapitalize = 'none'
          secureTextEntry={true}
          ref={(input) => this.password = input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          onSubmitEditing={()=> this.passwordr.focus()}/>         
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Repetir Password'
          autoCapitalize = 'none'
          secureTextEntry={true}
          ref={(input) => this.passwordr = input}
          onChangeText={(passwordr) => this.setState({passwordr})}
          value={this.state.passwordr}
          onSubmitEditing ={() => this.validapass()}/> 

        <TouchableOpacity style={styles.button} onPress={() => this.registro2()}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage, KeyboardAvoidingView} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux'


export default class Formlogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      email:'', 
      password:'',      
      dataSource: '',
      oros:0
    }
  }
 

  getOros(id){
    console.log("ID user getOros:: "+id); 
    fetch('http://cuetox.pythonanywhere.com/usuarios/api_saldo_oros/', {
    method: 'POST',
    headers: {        
      'Content-Type': 'application/json',
      'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
    },      
    body: JSON.stringify({
			token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",
			user_id:id   
      })
    })
    .then((response) => response.json())
    .then(response => {        
      console.log('Oros from server' + response);
			this.setState({          
        oros: response
      }); 
      console.log('Oros state final' + this.state.oros);

      let orosupdate = {
        oros: this.state.oros      
      };
      console.log("Al final te dejo: " + this.state.oros);
      AsyncStorage.mergeItem('session_user', JSON.stringify(orosupdate)); 
    })
    .catch((error) =>{
      console.error(error);
    });  
  }
  
 loginMain(){
    console.log('FormLogin responseJson:::' + this.state.email + ' ' + this.state.password);
      if(this.state.email && this.state.password){
        fetch('http://cuetox.pythonanywhere.com/usuarios/login_usuario/', {
          method: 'POST',
          headers: {        
            'Content-Type': 'application/json',
            'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',
          },      
          body: JSON.stringify({
            token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",
            user: this.state.email,
            password:this.state.password        
            })
          })
          .then((response) => response.json())
          .then(response => {
            console.log('FormLogin response 1:::' + response );
            if(response != ''){                
                console.log('FormLogin responseJson0:::' + response[0] );
                console.log('FormLogin responseJson1:::' + response[0].fields.nombre );                
                              
                this.getOros(response[0].pk);
                console.log('FormLogin this.state.oros:::' + this.state.oros );   
                
                let usuario_object = {
                  id: response[0].pk,
                  nombre: response[0].fields.nombre,
                  apellido: response[0].fields.apellido,
                  email: response[0].fields.email,
                  password: response[0].fields.password,
                  oros: this.state.oros
                };
                
                AsyncStorage.setItem('session_user', JSON.stringify(usuario_object));
                
                this.setState({          
                  dataSource: response[0],
                }, function(){
                  if(response[0].fields.activo){
                    Actions.main()
                  }else{
                    Alert.alert(
                      'LOGIN',
                      'Usuario no registrado, favor de revisar sus credenciales.',
                      [        
                        {text: 'OK', onPress: Actions.login},
                      ],
                      { cancelable: false }
                    );
                  }
                    
                });
              }else{
                Alert.alert(
                  'LOGIN',
                  'Usuario no registrado, favor de revisar sus credenciales.',
                  [        
                    {text: 'OK', onPress: Actions.login},
                  ],
                  { cancelable: false }
                );
              }          

          })
          .catch((error) =>{
            console.error(error);
          });                
     
       }//if
       else{
        Alert.alert(
                  'LOGIN',
                  'Email o contraseña no validos, favor de revisar sus credenciales.',
                  [        
                    {text: 'OK'},
                  ], 
                  { cancelable: true }
                );
       }
                     
    }


	render(){    
		return(
			<KeyboardAvoidingView style={style.container} behavior="padding" enabled>                

        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Email'
          autoCapitalize = 'none'
          selectionColor="#fff"
          keyboardType="email-address"
          ref={(input) => this.email = input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email} 
          onSubmitEditing={()=> this.password.focus()}/>      
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password'
          autoCapitalize = 'none'
          secureTextEntry={true}
          ref={(input) => this.password = input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}          
          />            
        <TouchableOpacity style={styles.button} onPress={() => this.loginMain()}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
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

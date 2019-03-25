import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Dimensions, Picker, ImageEditor} from 'react-native';
import { ImagePicker, ImageManipulator} from 'expo';
import DatePicker from 'react-native-datepicker'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';

var { height,width } = Dimensions.get('window');


export default class Formsignup2 extends React.Component {
constructor(props) {
    super(props)
    this.state = { 
      licencia: '',
      categoria:'',
      date:"2018-06-01",
      image: null,    
      manipulatorResultBase64: null  
    }
  }

  registro(){

    console.log('Formsignup2: 2 registro fetch:::' + this.props.nombre);
    console.log('Formsignup2: 2 registro fetch:::' + this.props.apellido);
    console.log('Formsignup2: 2 registro fetch:::' + this.props.email);
    console.log('Formsignup2: 2 registro fetch:::' + this.props.telefono);
    console.log('Formsignup2: 2 registro fetch:::' + this.state.licencia);
    console.log('Formsignup2: 2 registro fetch:::' + this.state.date);
    console.log('Formsignup2: 2 registro fetch:::' + this.state.categoria);
    console.log('Formsignup2: 2 registro fetch:::' + this.props.password);
    console.log('Formsignup2: 2 registro fetch:::' + this.state.image);
    if(this.props.nombre && this.props.apellido && this.props.email && this.props.telefono &&
      this.state.licencia && this.state.categoria && this.props.password && this.state.image){
      try{
        console.log('registro fetch Entro Try:::');
          fetch('http://cuetox.pythonanywhere.com/v1/usuarios/', {
            method: 'POST',
            headers: {        
              'Content-Type': 'application/json',
              'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',
            },      
            body: JSON.stringify({
              nombre: this.props.nombre,
              apellido: this.props.apellido,
              email: this.props.email,
              telefono: this.props.telefono,
              numero_licencia: this.state.licencia,
              vigencia_licencia: this.state.date,
              categoria_licencia: this.state.categoria,
              password: this.props.password,
              imagen_licencia:null
            }),
            /*
            imagen_licencia:{
                uri: this.state.image,
                type: 'image/jpeg',
                name: 'testPhotoName'}
            */
          });
          
          //console.log('Formsignup2: 2 registro fetch:::' + this.state.manipulatorResultBase64);

          fetch('http://cuetox.pythonanywhere.com/usuarios/recived_license_image/', {
            method: 'POST',
            headers: {        
              'Content-Type': 'application/json',
              'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',
            },      
            body: JSON.stringify({
              token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",
              user:this.props.email,
              password:this.props.password,              
              licencia: this.state.manipulatorResultBase64
            }),            
          });
          
        }catch(err){
          console.log('falla fetch:::'+err.toString());
        }


          Alert.alert(
            'FIN REGISTRO',
            'Usuario registrado correctamente!',
            [        
              {text: 'OK', onPress: Actions.login},
            ],
            { cancelable: false }
          );
      }//IF
      else{
        Alert.alert(
            'FIN REGISTRO',
            'Favor de revisar información proporcionada!',
            [        
              {text: 'OK'},
            ],
            { cancelable: false }
          );
      }
    }

  render(){
    let { image } = this.state;


    return(   
      <View style={style.container}>    


        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Licencia'          
          selectionColor="#fff"         
          ref={(input) => this.licencia = input} 
          value={this.state.licencia}
          onChangeText={(licencia) => this.setState({licencia})}
          onSubmitEditing={()=> this.categoria.focus()}/>        

        <Picker 
          ref={(input) => this.categoria = input}
          selectedValue={this.state.categoria}
          style={styles.selectBox} 
          onValueChange={(itemValue, itemIndex) => this.setState({categoria: itemValue})}>          
          <Picker.Item label="Seleccione Tipo"/>
          <Picker.Item label="Automovilista" value="Automovilista"/>
          <Picker.Item label="Chofer" value="Chofer" />
        </Picker>
            <View style={style.signupTextcont}>
            <Text style={style.vigenciaText}>Vigencia: </Text>
             
            <DatePicker
              style={{width: 150}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2014-01-01"
              maxDate="2036-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />     

          </View>
                      
        <TouchableOpacity onPress={this._pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        <Image style= {style.imagen}
          source={ image != null ? {uri: image} : require('../imagenes/nodisponible.jpg') } 
        />

        <TouchableOpacity onPress={() => this.registro()} style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    )    
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: width, height: 225 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });
    
    const actions = []
    // this gives you a rct-image-store URI or a base64 image tag that
    // you can use from ImageStore
    const manipulatorResult = await ImageManipulator.manipulate(resizedUri, actions, {
      base64: true,
    })
    
    this.setState({ manipulatorResultBase64:manipulatorResult.base64  })
    this.setState({ image: resizedUri });
    //console.log('Formsignup2: 2 registro fetch:::' + this.state.manipulatorResultBase64);
  };

  _pickImageButtonPressed = async () => {
    console.log('here')
    const pickerResult = await ImagePicker.launchImageLibraryAsync({})

    const uri = pickerResult.uri

    const actions = []

    actions.push({ resize: { width:50, height: 50 } })

    const manipulatorResult = await ImageManipulator.manipulate(uri, actions, {
      base64: false,
    })
    this.setState({ image: uri });
    this.setState({ manipulatorResultBase64:manipulatorResult.base64  })

  }

}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    },
    imagen:{
      width: width-20,
      height: 225,      
      alignSelf: 'stretch',
      marginTop:20,
      marginLeft:37
    },
    signupTextcont:{        
    flexDirection:'row'
  },
  vigenciaText:{    
    fontSize:20,
    fontWeight:'500',
   },
});

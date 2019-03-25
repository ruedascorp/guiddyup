import React from 'react';
import { StyleSheet, Alert,Text, View, TouchableOpacity, Dimensions,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles';
var { height,width } = Dimensions.get('window');

export default class Formrecibo extends React.Component {
  
  constructor(props) {
    super(props)   
    this.state = {
      usuario_id:'',
      vehiculo_id:'',
      utiliza_oros:false,
      fecha_inicio:'',
      fecha_fin:'',
      dias:'',
      descripcion:[],
      precio:[],
      datos_extra:''
    } 
  }

  componentDidMount() {
    datosextrafin ='';
    AsyncStorage.getItem('contrato_object', (err, result) => {
      let resultp = JSON.parse(result); // boolean false
      console.log("Formcarselected item.oros:: "+resultp);
      this.setState({
        usuario_id: resultp.usuario_id,
        vehiculo_id:resultp.vehiculo_id,
        utiliza_oros:resultp.utiliza_oros,
        fecha_inicio:resultp.fecha_inicio,
        fecha_fin:resultp.fecha_fin,
        dias:resultp.dias,
        descripcion:resultp.descripcion,
        precio:resultp.precio,
        tarifa_dia:resultp.tarifa_dia,
        datos_extra:resultp.datos_extra
      });
    });
  }
 
  generarcontrato(){
    var generar=true;
    Alert.alert(
      'Generación de contrato',
       'Días \n',
      [        
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Aceptar', onPress: () => generar=true},
      ],
      { cancelable: true }
      );
      if (generar){
        fetch('http://cuetox.pythonanywhere.com/contratos/api_contrato', {
          method: 'POST',
          headers: {        
            'Content-Type': 'application/json',
            'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
          },      
          body: JSON.stringify({            
            "token":"xArkv87g9bxvstfTRnBondmWYaIvmg8s",
            "id_usuario":this.state.usuario_id,
            "id_vehiculo":this.state.vehiculo_id,
            "fecha_inicio":this.state.fecha_inicio,
            "fecha_fin":this.state.fecha_fin,
            "ubicacion_lat":"0",
            "ubicacion_lon":"0",
            "utiliza_oros":this.state.utiliza_oros,
            "direccion":"",
            "datos_extra":this.state.datos_extra      
            })
          })
          .then((response) => response.json())
          .then(responseJson => {                     
            console.log("Genera contrato:: ");             
          })
          .catch((error) =>{
            console.error(error);
          });
        }
    }
   
render() {
    var render_datosextra = [];
    var usa_oros= this.state.utiliza_oros==true?'Sí':'No';
    for(let i = 0; i < this.state.descripcion.length; i++){
      render_datosextra.push(
        <View key={i} style={style.signupTextcont}>          
          <Text style={style.descripcion_s}>{this.state.descripcion[i]}</Text>   
          <Text style={style.precio_s}>  -> $</Text>                           
          <Text style={style.precio_s}>{this.state.precio[i]}</Text>                              
        </View>        
      )
    }

    return (
      <View style={style.container}>
        <View key={i} style={style.signupTextcont}>          
          <Text style={style.descripcion_s}>Renta {this.state.dias} días</Text>                              
          <Text style={style.precio_s}>  -> $</Text>         
          <Text style={style.precio_s}>{this.state.tarifa_dia * this.state.dias}</Text>          
        </View>        
        {render_datosextra}
        <View style={style.signupTextcont}>
          <Text style={style.descripcion_s}>Utiliza Oros: </Text>         
          <Text style={style.precio_s}> {usa_oros}</Text>
        </View>
        

        <View style={style.botones}>          
          <View style={style.box}>
            <TouchableOpacity onPress={() => this.atras()} style={style.button}>
              <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>
          </View>
          <View style={style.box}>
            <TouchableOpacity onPress={() => this.generarcontrato()} style={style.button}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
 
const style = StyleSheet.create({
  container: {
    flex: 1,
  },  
  box: {
    width: width / 2    
  },
  button:{    
    backgroundColor:'#c8b7b5',
    borderRadius: 2,
    height: 30
  },
  botones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  view_d:{
    flexGrow: 1,       
    width: 3 * width/4,
    paddingVertical:1,
    height:20,
    flexDirection:'row'
  },
  view_p:{
    flexGrow: 1,       
    width: width/4,
    paddingVertical:1,    
    height:20,
    flexDirection:'row'
  },
  descripcion_s:{    
    fontSize:20,
    fontWeight:'500',
    textAlign: 'left'
   },
  precio_s:{
    fontSize:20,
    color:'#01579B',
    fontWeight:'500',
    textAlign: 'right'
  },
  signupTextcont:{
    flexGrow: 1,    
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical:16, 
    flexDirection:'row'
  },
});
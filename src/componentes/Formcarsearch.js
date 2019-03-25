import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Picker, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'
import styles from '../styles';


export default class Formcarsearch extends React.Component {
constructor(props) {
    super(props);
    this.state = {       
      costo: '',
      clasificacion:'',
      modelo:'',
      direccion:'',
      ubicacion:'',
      fecharecogida:"2018-11-01",
      fechaentrega:"2018-11-01",
      horarecogida:'',
      minutorecogida:'',
      costos_ws:[],
      modelos_ws:[],
      tipos_ws:[]
    }
  }

  componentDidMount() {         
    fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_rango_precios/', {
      method: 'POST',
      headers: {        
        'Content-Type': 'application/json',
        'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
      },      
      body: JSON.stringify({
        token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",                    
        })
      })
      .then((response) => response.json())
      .then(responseJson => {   
        console.log('costos:::' + responseJson.toString().split(","));
        this.setState( {
          costos_ws : responseJson.toString().split(",")
        });                     
        
      })
      .catch((error) =>{
        console.error(error);
      });  
     
    
    fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_tipo_vehiculos/', {
      method: 'POST',
      headers: {        
        'Content-Type': 'application/json',
        'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
      },      
      body: JSON.stringify({
        token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",                    
        })
      })
      .then((response) => response.json())
      .then(responseJson => {         
        this.setState( {
          tipos_ws : responseJson
        });                     
        
      })
      .catch((error) =>{
        console.error(error);
      });  

      fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_modelos/', {
      method: 'POST',
      headers: {        
        'Content-Type': 'application/json',
        'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
      },      
      body: JSON.stringify({
        token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",                    
        })
      })
      .then((response) => response.json())
      .then(responseJson => {         
        this.setState( {
          modelos_ws : responseJson
        });                     
        
      })
      .catch((error) =>{
        console.error(error);
      });  
  }  

  buscar(){    
      
      var precio = this.state.costo.split("-");  
      var preciomenor=0
      var preciomayor=10000

      let fechas_object = {
        fecharecogida: this.state.fecharecogida,
        fechaentrega: this.state.fechaentrega
      }
      AsyncStorage.setItem('fechascontrato', JSON.stringify(fechas_object));

      if(precio.length > 1 )  {  
        preciomenor=precio[0]
        preciomayor=precio[1]
      }
      console.log("Servicio carsearch: "+this.state.clasificacion + this.state.modelo + preciomenor + preciomayor);
      fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_vehiculos/', {
        method: 'POST',
        headers: {        
          'Content-Type': 'application/json',
          'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
        },      
        body: JSON.stringify({
          token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",    
          "tipo":this.state.clasificacion,
          "modelo":this.state.modelo,
          "precio_mayor":preciomayor,
          "precio_menor":preciomenor        
          })
        })
        .then((response) => response.json())
        .then(responseJson => {         
          this.setState( {
            datos : responseJson
          });               
              
          Actions.carresult({
            flatListVehiculos: responseJson            
          });
        })
        .catch((error) =>{
          console.error(error);
        });        
  }

	render(){    
		return(		
			<KeyboardAvoidingView  style={style.container} behavior="padding" enabled>	
          <Picker 
            ref={(input) => this.costo = input}
            selectedValue={this.state.costo}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({costo: itemValue})}>          
            <Picker.Item label="Seleccione costo" value=""/>                     
            {this.state.costos_ws.map((item,key)=>(
            <Picker.Item label={item.toString()} value={item.toString()} key={key}/> )
            )}
          </Picker>
          
          <Picker 
            ref={(input) => this.clasificacion = input}
            selectedValue={this.state.clasificacion}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({clasificacion: itemValue})}>          
            <Picker.Item label="Seleccione tipo" value="" />            
            {this.state.tipos_ws.map((item,key)=>(
            <Picker.Item label={item.tipo} value={item.id} key={key}/> )
            )}
          </Picker>

          <Picker 
            ref={(input) => this.modelo = input}
            selectedValue={this.state.modelo}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({modelo: itemValue})}>        
            <Picker.Item label="Seleccione modelo" value="" />
            {this.state.modelos_ws.map((item,key)=>(
            <Picker.Item label={item.modelo} value={item.id} key={key}/> )
            )}                          
          </Picker>                
          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Domicilio'
          selectionColor="#fff"          
          value={this.state.direccion}
          onChangeText={(direccion) => this.setState({direccion})}/>
        
          <View style={style.signupTextcont}>
            <Text style={style.vigenciaText}>Recogida: </Text>           
            <DatePicker
              style={{width: 150}}
              date={this.state.fecharecogida}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2018-01-01"
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
              onDateChange={(fecharecogida) => {this.setState({fecharecogida: fecharecogida})}}
            />     
          </View>

          <View style={[style.signupTextcont,style.espacios]}>
            <Text style={style.vigenciaText}>Entrega: </Text>             
            <DatePicker
              style={{width: 150}}
              date={this.state.fechaentrega}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2018-01-01"
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
              onDateChange={(fechaentrega) => {this.setState({fechaentrega: fechaentrega})}}
            />     

          </View>         
        <TouchableOpacity style={styles.button} onPress={() => this.buscar()}>
          <Text style={styles.buttonText}>Buscar</Text>
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
    flexDirection: 'column',
    },    
  signupTextcont:{        
    flexDirection:'row'
  },
  vigenciaText:{    
    fontSize:20,
    fontWeight:'500',
   },
   espacios:{
     paddingTop:10
   }
});

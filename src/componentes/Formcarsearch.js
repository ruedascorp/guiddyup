import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Picker} from 'react-native';
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
      ubicacion:'',
      fecharecogida:"2018-06-01",
      fechaentrega:"2018-06-01",
      horarecogida:'',
      minutorecogida:''
    }
  }

  buscar(){
   
    var flatListVehiculos1 = ''; 
    Actions.carresult({
      flatListVehiculos: flatListVehiculos1
    });
  }

	render(){    
		return(		
			<View style={style.container}>	
          <Picker 
            ref={(input) => this.costo = input}
            selectedValue={this.state.costo}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({costo: itemValue})}>          
            <Picker.Item label="Seleccione costo"/>
            <Picker.Item label="200-800" value="200-800"/>
            <Picker.Item label="Todos" value="all" />
          </Picker>
          
          <Picker 
            ref={(input) => this.clasificacion = input}
            selectedValue={this.state.clasificacion}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({clasificacion: itemValue})}>          
            <Picker.Item label="Seleccione clasificacion" value="all" />
            <Picker.Item label="Auto Compacto" value="Auto"/>
            <Picker.Item label="Todos" value="all" />
          </Picker>          
          <Picker 
            ref={(input) => this.modelo = input}
            selectedValue={this.state.modelo}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({modelo: itemValue})}>          
            <Picker.Item label="Seleccione modelo" value="all" />
            <Picker.Item label="Algún modelo" value="Modelo"/>
            <Picker.Item label="Todos" value="all" />
          </Picker>          
        
          <View style={style.signupTextcont}>
            <Text style={style.vigenciaText}>Fecha recogida: </Text>           
            <DatePicker
              style={{width: 150}}
              fecharecogida={this.state.fecharecogida}
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

          <View style={style.signupTextcont}>
            <Text style={style.vigenciaText}>Fecha entrega: </Text>             
            <DatePicker
              style={{width: 150}}
              fechaentrega={this.state.fechaentrega}
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

          <Picker 
            ref={(input) => this.horarecogida = input}
            selectedValue={this.state.horarecogida}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({horarecogida: itemValue})}>          
            <Picker.Item label="Seleccione Hora"/>
            <Picker.Item label="0" value="0"/>
            <Picker.Item label="1" value="1"/>
            <Picker.Item label="2" value="2"/>
            <Picker.Item label="3" value="3"/>
            <Picker.Item label="4" value="4"/>
            <Picker.Item label="5" value="5"/>
            <Picker.Item label="6" value="6"/>
            <Picker.Item label="7" value="7"/>
            <Picker.Item label="8" value="8"/>
            <Picker.Item label="9" value="9"/>
            <Picker.Item label="10" value="10"/>
            <Picker.Item label="11" value="11"/>
            <Picker.Item label="12" value="12"/>
          </Picker>
          <Picker 
            ref={(input) => this.minutorecogida = input}
            selectedValue={this.state.minutorecogida}
            style={styles.selectBox} 
            onValueChange={(itemValue, itemIndex) => this.setState({minutorecogida: itemValue})}>          
            <Picker.Item label="Seleccione Minuto"/>
            <Picker.Item label="00" value="0"/>
            <Picker.Item label="15" value="15"/>
            <Picker.Item label="30" value="30"/>
            <Picker.Item label="45" value="45"/>            
          </Picker>
        <TouchableOpacity style={styles.button} onPress={() => this.buscar()}>
          <Text style={styles.buttonText}>Buscar</Text>
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
    signupTextcont:{        
    flexDirection:'row'
  },
  vigenciaText:{    
    fontSize:20,
    fontWeight:'500',
   },
});
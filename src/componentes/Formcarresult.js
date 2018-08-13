import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Dimensions, Alert, Image} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
//import flatListVehiculos from'../data/flatListVehiculos';

var { height,width } = Dimensions.get('window');

const url ="http://cuetox.pythonanywhere.com/";
class FlatListItem extends React.Component{
  carselected(imagen,transmision,cantidad_maletas,cantidad_pasajeros,tarifa_dia,arrendadoralogo){
    console.log('Formcarsearch key_id:::' +', transmision:'+ transmision );    

    Actions.carselected(
         {
          transmision1: transmision,
          imagen1: imagen,
          cantidad_maletas1: cantidad_maletas,
          cantidad_pasajeros1: cantidad_pasajeros,
          tarifa_dia1: tarifa_dia,
          arrendadoralogo1: arrendadoralogo
        }
      ) 
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.carselected(        
        url+this.props.item.imagen,
        this.props.item.transmision,
        this.props.item.cantidad_maletas,
        this.props.item.cantidad_pasajeros,
        this.props.item.tarifa_dia,
        url+this.props.item.arrendadora_imagen
        )}>
            <View style={{ 
                //flex:1,
                flexDirection:'row',  
                borderWidth: 1,
                borderRadius: 8,  
                marginVertical:1,
                marginHorizontal:1,
                width:width-2,
                //backgroundColor:this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
                height: 100,
              }}> 
              <View style={{
                  flex:3,
                  flexDirection:'column',                  
                  backgroundColor:'white',
                  borderRadius: 8,
                  width:98,
                  height:98
                }}> 
                <Image source={ this.props.item.imagen != null ? {uri: url+this.props.item.imagen} : require('../imagenes/nodisponible.jpg')}
                        style={{width: 70, height: 70, resizeMode: "contain", margin:2, backgroundColor:'white',}}>
                </Image>
                </View>
                <View style={{ 
                  flex:1,
                  flexDirection:'column',
                  width:30
                }}>
                  <Image source={require('../imagenes/transmision.png')}
                        style={{width: 16, height: 16, resizeMode: "contain", marginTop:15, marginLeft:3, backgroundColor:'rgba(255,255,255,0.3)',}}>
                  </Image>            
                  <Image source={require('../imagenes/aircond.png')}
                          style={{width: 16, height: 16, resizeMode: "contain", marginTop:15,marginLeft:3, backgroundColor:'rgba(255,255,255,0.3)',}}>
                  </Image>
                  <Image source={require('../imagenes/cilindros.png')}
                          style={{width: 16, height: 16, resizeMode: "contain", marginTop:15,marginLeft:3, backgroundColor:'rgba(255,255,255,0.3)',}}>
                  </Image>                                                      
                </View>
                <View style={{
                  flex:2,
                  flexDirection:'column',
                  width:30
                }}>
                  <Text style={style.FlatListItem}>{this.props.item.transmision == 'AUTOMATICO' ? 'AUT':'STD'}</Text>
                  <Text style={style.FlatListItem}>A/A</Text>      
                  <Text style={style.FlatListItem}>{this.props.item.cantidad_maletas}</Text>                
                </View>  
                <View style={{
                  flex:1,
                  flexDirection:'column',            
                  width:30
                }}>                  
                  <Image source={require('../imagenes/pasajeros.png')}
                          style={{width: 16, height: 16, resizeMode: "contain", marginTop:15,marginLeft:3, backgroundColor:'rgba(255,255,255,0.3)',}}>
                  </Image>                                                                 
                </View>
                <View style={{
                  flex:2,
                  flexDirection:'column',  
                  width:30          
                }}> 
                  <Text style={style.FlatListItem}>{this.props.item.cantidad_pasajeros}</Text>            
                </View>
                <View style={{
                  flex:3,
                  flexDirection:'column',            
                  width:50
                }}>
                  <Text style={{color:'white', padding: 20, fontSize: 16, textAlign:'center',fontWeight:'500',}}>
                  {this.props.item.tarifa_dia} X Día</Text>            
                </View>
                <View style={{
                  flex:3,
                  flexDirection:'column',                  
                  backgroundColor:'white',
                  borderRadius: 8,
                  width:98,
                  height:98,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}> 
                  <Image source={ this.props.item.arrendadora_imagen != null ? {uri: url+this.props.item.arrendadora_imagen} : require('../imagenes/nodisponible.jpg')}
                          style={{width: 70, height: 70, resizeMode: "contain", margin:2, backgroundColor:'white',}}>
                  </Image>          
                </View>              
            </View>
        </TouchableOpacity>
      );
  }
}

export default class Formcarresult extends React.Component {  
  constructor(props) {
    super(props) 
    this.state={ 
      datos: []
    }
  }

  componentDidMount() {        
      let datos = '';            
        fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_vehiculos/', {
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
          .then(response => {    
            console.log('flatListVehiculos response XXWW:::' + JSON.stringify(response) );         
            datos = JSON.stringify(response).toString().replace(new RegExp("\"id_vehiculo\"",'g'), "\"key\"");//.replace(new RegExp("\"id\"",'g'), "\"key\"");                                  
            this.setState({ datos });                     
                
          })
          .catch((error) =>{
            console.error(error);
          });  
  }

	render(){    
		return(
			<View style={style.container}>   
      <Text>{this.state.datos}</Text>
      <FlatList 
          data={this.state.datos}
          renderItem = {({item})=> {
            return(
              <FlatListItem item={item}>
              </FlatListItem>
              );
          }}
          keyExtractor = {(item, index) => item.id}
        >
        </FlatList>        
			</View>
			)
	}
}

const style = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 23
    },
    FlatListItem: {
      color:'white',
      padding: 6,
      fontSize: 16,
      textAlign:'center',
      fontWeight:'500',
    }

});

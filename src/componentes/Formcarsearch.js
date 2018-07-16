import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Dimensions, Alert, Image} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
import flatListVehiculos from'../data/flatListVehiculos';

var { height,width } = Dimensions.get('window');

class FlatListItem extends React.Component{
  render() {
    return (
      <View style={{
          flex:1,
          flexDirection:'row',  
          borderWidth: 1,
          borderRadius: 8,  
          marginVertical:1,
          marginHorizontal:1,
          width:width,
          height: 100,
        }}> 
        <View style={{
            flex:2,
            flexDirection:'column',
            //backgroundColor:this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
            backgroundColor:'rgba(192,192,192,0.3)',
            width:width
          }}> 
          <Image source={ this.props.item.modelo.imagen != null ? {uri: this.props.item.modelo.imagen} : require('../imagenes/nodisponible.jpg')}
                  style={{width: 100, height: 100, resizeMode: "contain", margin:2, backgroundColor:'white',}}>
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
            <Text style={style.FlatListItem}>"A/A"</Text>      
            <Text style={style.FlatListItem}>{this.props.item.modelo.cantidad_maletas}</Text>                
          </View>  
          <View style={{
            flex:2,
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
            <Text style={style.FlatListItem}>{this.props.item.modelo.cantidad_pasajeros}</Text>            
          </View>
          <View style={{
            flex:1,
            flexDirection:'column',            
            width:50
          }}>
            <Text style={{color:'white', padding: 20, fontSize: 16}}>Tarifa X Día</Text>            
          </View>
          <View style={{
            flex:1,
            flexDirection:'column',            
            width:50
          }}>
          <Text style={{color:'white', padding: 20, fontSize: 20}}>{this.props.item.tarifa_dia}</Text>            
          </View>              
      </View>
      );
  }
}

export default class Formcarsearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      email:'',
      password:'',      
      dataSource: '',
    }
  }

	render(){    
		return(
			<View style={style.container}>                
        <FlatList 
          data={flatListVehiculos}
          renderItem = {({item, index})=>{
            console.log({item});
            return(
              <FlatListItem item={item} index={index}>
              </FlatListItem>
              );
          }}

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
      fontSize: 16
    }

});

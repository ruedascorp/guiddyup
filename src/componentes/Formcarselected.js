import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Dimensions, Alert, Image} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
import flatListRecompensas from'../data/flatListRecompensas';

var { height,width } = Dimensions.get('window');
class FlatListItem extends React.Component{  
  render() {
    return (
          <View style={{ 
                //flex:1,
                flexDirection:'row',  
                borderWidth: 1,
                borderRadius: 8,  
                marginVertical:1,
                marginHorizontal:1,
                width:width-30,
//                backgroundColor:this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
                height: 100,
              }}>
              <Text style={{color:'white', padding: 20, fontSize: 16, textAlign:'center',fontWeight:'500',}}>
                  {this.props.item.descripcion} X Día</Text>            
              </View>
      );
  }
}

class ItemSelected extends React.Component{  
  render() {
    return (
      
            <View style={{ 
                //flex:1,
                flexDirection:'row',  
                borderWidth: 1,
                borderRadius: 8,  
                marginVertical:1,
                marginHorizontal:1,
                width:width-30,
//                backgroundColor:this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
                height: 100,
              }}> 
              <View style={{
                  flex:3,
                  flexDirection:'column',                  
                  backgroundColor:'white',
                  borderRadius: 8,
                  width:78,
                  height:98
                }}> 
                  <Image source={ this.props.imagen1 != null ? {uri: this.props.imagen1} : require('../imagenes/nodisponible.jpg')}
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
                  <Text style={style.FlatListItem}>{this.props.transmision1 == 'AUTOMATICO' ? 'AUT':'STD'}</Text>
                  <Text style={style.FlatListItem}>A/A</Text>      
                  <Text style={style.FlatListItem}>{this.props.cantidad_maletas1}</Text>                
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
                  <Text style={style.FlatListItem}>{this.props.cantidad_pasajeros1}</Text>            
                </View>
                <View style={{
                  flex:3,
                  flexDirection:'column',            
                  width:50
                }}>
                  <Text style={{color:'white', padding: 20, fontSize: 14, textAlign:'center',fontWeight:'500',}}>
                  {this.props.tarifa_dia1} X Día</Text>            
                </View>
                <View style={{
                  flex:3,
                  flexDirection:'column',                  
                  backgroundColor:'white',
                  borderRadius: 8,
                  width:78,
                  height:98,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}> 
                  <Image source={ this.props.arrendadoralogo1 != null ? {uri: this.props.arrendadoralogo1} : require('../imagenes/nodisponible.jpg')}
                          style={{width: 70, height: 70, resizeMode: "contain", margin:2, backgroundColor:'white',}}>
                  </Image>          
                </View>              
            </View>      
      );
  }
}

export default class Formcarsearch extends React.Component {

  constructor(props) {
    super(props)    
  }

	render(){    
		return(
			<View style={style.container}>  
        <ItemSelected transmision1={this.props.transmision1} 
            imagen1 = {this.props.imagen1} 
                  cantidad_maletas1= {this.props.cantidad_maletas1}
                  cantidad_pasajeros1= {this.props.cantidad_pasajeros1} 
                  tarifa_dia1= {this.props.tarifa_dia1}
                  arrendadoralogo1= {this.props.arrendadoralogo1} />
        
        <FlatList 
          data={flatListRecompensas}
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
      fontSize: 16,
      textAlign:'center',
      fontWeight:'500',
    }

});

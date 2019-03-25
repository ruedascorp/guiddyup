import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage, TouchableOpacity, Dimensions, Alert, Image} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
//import flatListVehiculos from'../data/flatListVehiculos';

var { height,width } = Dimensions.get('window');

const url ="http://cuetox.pythonanywhere.com/";

class FlatListItem extends React.Component{
  llamada(numero){ 
    console.log('Cambio por falla, llamada número:::' + numero );        
  }  

  render() {
    return (
      <TouchableOpacity onPress={() => this.llamada(        
        this.props.item.arrendadora_telefono,        
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
                backgroundColor:'#F5F5F5',
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
                <Image source={ this.props.item.arrendadora_logo != null ? {uri: url+this.props.item.arrendadora_logo} : require('../imagenes/nodisponible.jpg')}
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
        this.state = {                   
          datos:[]  
          } 
      }

      componentDidMount(){            

        fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_vehiculos/', {
            method: 'POST',
            headers: {        
            'Content-Type': 'application/json',
            'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
            },      
            body: JSON.stringify({
            token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",    
            "id":this.props.id,            
            })
        })
        .then((response) => response.json())
        .then(responseJson => {         
        this.setState( {
            datos : responseJson
        });               
                
        })
        .catch((error) =>{
            console.error(error);
        });        

    }


	render(){    
		return(
			<View style={style.container}>   
      
      <FlatList 
          data={this.state.datos}          
          renderItem = {({item})=> {
            return(
              <FlatListItem item={item}>
              </FlatListItem>
              );
          }}
          keyExtractor = {(item, index) => ''+item.id}
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
      color:'black',
      padding: 6,
      fontSize: 16,
      textAlign:'center',      
      fontWeight:'500'
    }
});

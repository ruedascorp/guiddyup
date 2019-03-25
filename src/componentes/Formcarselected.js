import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableOpacity,TouchableHighlight, Dimensions, Image, AsyncStorage,ScrollView} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
//import flatListRecompensas from'../data/flatListRecompensas';
import { CheckBox } from 'react-native-elements'; 
import moment from 'moment';

var { height,width } = Dimensions.get('window');
var datosextrafin ='';

class FlatListItem extends React.Component{ 
  
  constructor(props) { 
    super(props)   
    this.state = { 
      datosextra:[],    
      stylo:'normalbutton'
      } 
  };
  
 
  recompensaselected(id){ 
    const index = this.state.datosextra.findIndex(dato => dato === id);
    
    console.log('Dato entrada' + datosextrafin);

    console.log("Recompensas index: " + index +', id:' +id)
    if(index < 0){
      this.setState({ datosextra: [...this.state.datosextra, id] })
      datosextrafin = datosextrafin + id + ',';
      this.setState({ datosextra: [...this.state.datosextra, id] })
      console.log("Agrego: " + datosextrafin)
      this.setState( {
        stylo : 'selectedbutton'
      });
    }else{
      console.log("Recompensas: borro: " + this.state.datosextra[index])
      this.state.datosextra[index] = '';      
      datosextrafin = datosextrafin.replace(id+',', '');
      this.setState( {
        stylo : 'normalbutton'
      });
    }
    
    console.log("Recompensas dato salida: " + datosextrafin)
  }

  render() {
    var colorStyles = {      
      backgroundColor:'lightgray',
    };
    if(this.state.stylo ==='normalbutton'){
        colorStyles = {        
        backgroundColor:'lightgray',
      };
    }else{
        colorStyles = {
        backgroundColor:'tomato',
      };
    }
    return (
      
      <TouchableHighlight onPress={() => this.recompensaselected(this.props.item.id_dato)} underlayColor="white">
          <View style={ [style.normalbutton,colorStyles] }>
                <Text style={{color:'white', padding: 2, fontSize: 12, textAlign:'center',fontWeight:'500',
              fontWeight: 'bold',textShadowColor: '#000000',textShadowRadius:2,textShadowOffset: {width: 2,height: 2},}}>
                  {this.props.item.nombre}
                </Text>            
                <Text style={{color:'white', padding: 2, fontSize: 15, textAlign:'center',fontWeight:'500',
              fontWeight: 'bold',textShadowColor: '#000000',textShadowRadius:2,textShadowOffset: {width: 2,height: 2},}}>
                  Precio: {this.props.item.precio}
                </Text>            
                <Text style={{color:'white', padding: 2, fontSize: 15, textAlign:'center',fontWeight:'500',
              fontWeight: 'bold',textShadowColor: '#000000',textShadowRadius:2,textShadowOffset: {width: 2,height: 2},}}>
                  Oros: {this.props.item.oros}
                </Text>            
              </View>
          </TouchableHighlight>
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
                backgroundColor:'#F5F5F5',
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
                          style={{width: 60, height: 60, resizeMode: "contain", margin:2, backgroundColor:'white',}}>
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
                  <Text style={{color:'black', padding: 20, fontSize: 14, textAlign:'center',fontWeight:'500',}}>
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
    this.state = { 
      oros: 0,
      usuario:null,
      checked: false,
      datos:[],
      fecha_fin:'',
      fecha_inicio:''
      } 
  }
  
  _goback(){    
    Actions.carsearch();    
  }
  
  contrato(){
/*    token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",
    id_usuario: this.state.usuario.id,
    id_vehiculo: this.props.id1
    fecha_inicio: 
    fecha_fin: 
    ubicacion_lat:'' 
    ubicacion_lon:'' 
    utiliza_oros: this.state.checked
    datos_extra: '[' +datosextrafin+']'
    */
   console.log('Datos del coontrato, idusr:'+ this.state.usuario.id +', idveh:'+this.props.id1 + 
   ', utioros:'+this.state.checked+', datext:'+'[' +datosextrafin.substring(0, datosextrafin.length-1) +'], fechai: '+this.state.fecha_inicio+
   ', fechaf:' + this.state.fecha_fin );
    /**Calculos del contrato*/
    //Extras
    var datosextraagregados =  datosextrafin.split(',');
    var textodatosextra='';
    var descripcion=[];
    var precio=[];    
        
    var x =null;
    var y =null;
    var Total=0;
    var saldoorostotal = this.state.oros;
    
    console.log(datosextraagregados)

    for (i = 0; i < datosextraagregados.length; i++) {
      y = datosextraagregados[i];
      console.log(y)
      for (e in this.state.datos) {
        x = this.state.datos[e];
        console.log(x.id_dato +'-vs-' +y)
        if(x.id_dato == y){                    
          if(x.oros < saldoorostotal){
            saldoorostotal = saldoorostotal - x.oros;
            textodatosextra = textodatosextra + x.nombre + '\tPrecio: -'+x.precio+'\n';
            Total = Total - x.precio;//Sumo al total
          }else{
            textodatosextra = textodatosextra + x.nombre + '\tPrecio: '+x.precio+'\n';
            Total = Total + x.precio;//Sumo al total
          }
          console.log('Entre: '+textodatosextra)
          descripcion.push(x.nombre);
          precio.push(x.precio);
        }
      }
    }
    
    console.log('SaldoFinalOros: ' + saldoorostotal)

    //Extras

    //Costo x día automovil
    //días reantados

    //Dias Rentados
  
    const startDate = moment(this.state.fecha_inicio);
    const timeEnd = moment(this.state.fecha_fin);
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);
    
    var dias = diffDuration.days();             
    if (dias<0){
      dias=0;
    }else if (dias == 0){
      dias=1;
    }
    /*
    'Se mandaria a contrato: ' + this.state.usuario.id +', idveh:'+this.props.id1 + 
      ', utioros:'+this.state.checked+', datext:'+'[' +datosextrafin.substring(0, datosextrafin.length-1) +'], fechai: '+this.state.fecha_inicio+
      ', fechaf:' + this.state.fecha_fin +
    */
   var datos_extra = '[' +datosextrafin.substring(0, datosextrafin.length-1)+']';

   let contrato_object = {
     usuario_id:this.state.usuario.id,
     vehiculo_id:this.props.id1,
     utiliza_oros:this.state.checked,
     fecha_inicio:this.state.fecha_inicio,
     fecha_fin:this.state.fecha_fin,
     dias:dias,
     descripcion:descripcion,
     precio:precio,
     tarifa_dia:this.props.tarifa_dia1,
     datos_extra:datos_extra
   }
   AsyncStorage.setItem('contrato_object', JSON.stringify(contrato_object));
    Actions.recibo();
    }

  componentDidMount() { 
      /*const value = AsyncStorage.getItem('session_user');
      this.setState({          
        usuario: value,
        oros:value.oros
      });*/
      datosextrafin ='';
      AsyncStorage.getItem('session_user', (err, result) => {                              
        let resultp = JSON.parse(result); // boolean false
        console.log("Formcarselected item.oros:: "+resultp+", "+resultp.oros);
        this.setState({          
          usuario: resultp,
          oros: resultp.oros
        });                  
      });

      AsyncStorage.getItem('fechascontrato', (err, result) => {                              
        let resultp = JSON.parse(result); // boolean false
        console.log("Formcarselected fechas:: " + resultp);
        this.setState({          
          fecha_inicio: resultp.fecharecogida,
          fecha_fin: resultp.fechaentrega
        });                  
      });
          
      fetch('http://cuetox.pythonanywhere.com/arrendadoras/api_vehiculo/', {
        method: 'POST',
        headers: {        
          'Content-Type': 'application/json',
          'Authorization': 'Basic amN1ZXRvOndlc2Y1MTE0',            
        },      
        body: JSON.stringify({
          token:"xArkv87g9bxvstfTRnBondmWYaIvmg8s",    
          "id":this.props.id1,
          
          })
        })
        .then((response) => response.json())
        .then(responseJson => {         
          this.setState( {
            datos : responseJson.extras
          });                          
          console.log("responseJson.extras:: " + responseJson.extras);             
        })
        .catch((error) =>{
          console.error(error);
        });        
  }
  
	render(){    
		return(
			<View style={style.container}>  
        <View style={style.itemStyle}> 
        <ItemSelected transmision1={this.props.transmision1} 
            imagen1 = {this.props.imagen1} 
                  cantidad_maletas1= {this.props.cantidad_maletas1}
                  cantidad_pasajeros1= {this.props.cantidad_pasajeros1} 
                  tarifa_dia1= {this.props.tarifa_dia1}
                  arrendadoralogo1= {this.props.arrendadoralogo1} />
        </View>
        <ScrollView style={style.scrollstyle}>
          <FlatList 
          data={this.state.datos}
          renderItem = {({item, index})=>{            
            return(
              <FlatListItem item={item} index={index}>
              </FlatListItem>
              );
          }}
          keyExtractor = {(item, index) => ''+item.id_dato}
          numColumns={2}>
	        </FlatList>        
        </ScrollView>

        <View style={{ flex: 1 }}>
        <Text> Saldo en oros: {this.state.oros}</Text>
          <View>
            <CheckBox       
              title='Seleccione para utilizar oros.'       
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />            
          </View>
          <View  style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.contrato()}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
			</View>
			)
	}
}

const style = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 23,
    justifyContent: 'center'
    },    
    orosstyle: { 
      flexDirection: 'column',          
    },
    scrollstyle: {
      height: height/3
    },
    itemStyle: {
      flexGrow: 1,
      justifyContent: 'center',
      height: height/6,
      alignItems: 'center',
    },    
    botones: {
    flex: 1,
    flexDirection: 'row'
    },
    box: {
      width: width / 2,
      height: 100
    },
    button:{
      width: width - 50,
      height: 25,
      backgroundColor:'#c8b7b5',
      borderRadius: 15
    },
    FlatListItem: {
      color:'black',
      padding: 6,      
      fontSize: 13,
      textAlign:'center',
      fontWeight:'500'
    },
    normalbutton:{
      flexDirection:'column',  
      borderWidth: 2,
      borderRadius: 8, 
      borderColor: '#efb810', 
      marginVertical:1,
      marginHorizontal:1,
      width:width / 2 -4,
      //backgroundColor:this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
      height: 73,
    }

});

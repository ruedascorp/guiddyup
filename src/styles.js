import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    selectBox:{
      width:300,      
      backgroundColor:'rgba(255,255,255,0.3)',      
      borderRadius: 25,
      paddingHorizontal:16,            
      marginVertical:10,
    },
    inputBox: {
      width:300,      
      backgroundColor:'rgba(255,255,255,0.3)',      
      borderRadius: 1,
      paddingHorizontal:16,
      fontSize:24,
      color:'#000000',
      marginVertical:10,            
    },
    button:{
      width:250,      

      backgroundColor:'#c8b7b5',
      borderRadius: 25,
      marginVertical:10,
      paddingVertical:10,
    },
    buttonText: {
      fontSize:20, 
      fontWeight:'500',
      color:'#000000',
      textAlign:'center'
    },
    signupTextcont:{
    flexGrow: 1,    
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row'
  },
   signupText:{
    color:'#01579B',
    fontSize:16,
    fontWeight:'500',
   },   
   textmenu: {    
    fontSize:22,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius:2,
    textShadowOffset: {width: 2,height: 2},    
    paddingTop:20 
   },
   logoImagen:{    
    width: 30, height: 25, resizeMode: "contain",        
   },
   
   
});

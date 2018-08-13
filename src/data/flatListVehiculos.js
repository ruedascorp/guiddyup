
export const flatListVehiculos = () =>
      var flatListVehiculos=[];
      console.log('flatListVehiculos responseJson:::');      
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
            console.log('flatListVehiculos response XX:::' + JSON.stringify(response) ); 
            flatListVehiculos = JSON.stringify(response);      
          })
          .catch((error) =>{
            console.error(error);
          });  
  
 
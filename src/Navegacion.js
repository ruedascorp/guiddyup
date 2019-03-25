import React from 'react';

import {Router, Stack, Scene, ActionConst } from 'react-native-router-flux';

import Login from './paginas/Login';
import Signup from './paginas/Signup';
import Signup2 from './paginas/Signup2';
import Main from './paginas/Main';
import Terminos from './paginas/Terminos'; 
import Carsearch from './paginas/Carsearch';
import Carresult from './paginas/Carresult';
import Carselected from './paginas/Carselected';
import Recibo from './paginas/Recibo';
import Cambioporfalla from './paginas/CambioPorFalla';

export default class Navegacion extends React.Component {
	render(){
		return(		
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Iniciar sesión" initial={true}/>
			      <Scene key="signup" component={Signup} title="Registro" />		      
			      <Scene key="signup2" component={Signup2} title="Registro2" />		      
			      <Scene key="main" component={Main} title="Main" />
			      <Scene key="terminos" component={Terminos} title="Terminos" />
			      <Scene key="carsearch" component={Carsearch} title="Busqueda Vehiculos" />
			      <Scene key="carresult" component={Carresult} title="Resultado Vehiculos" />
			      <Scene key="carselected" component={Carselected} title="Vehiculo seleccionado" />
				  <Scene key="recibo" component={Recibo} title="Recibo" />
				  <Scene key="cambioporfalla" component={Cambioporfalla} title="Cambio Por Falla" />
			    </Stack>
		  	</Router>
			
		)
	}
}
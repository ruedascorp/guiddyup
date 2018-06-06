import React from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './paginas/Login';
import Signup from './paginas/Signup';
import Signup2 from './paginas/Signup2';
import Main from './paginas/Main';
import Terminos from './paginas/Terminos';

export default class Navegacion extends React.Component {
	render(){
		return(		
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Iniciar sesión" initial={true}/>
			      <Scene key="signup" component={Signup} title="Registro"/>		      
			      <Scene key="signup2" component={Signup2} title="Registro2"/>		      
			      <Scene key="main" component={Main} title="Main"/>
			      <Scene key="terminos" component={Terminos} title="Terminos"/>
			    </Stack>
		  	</Router>
			
		)
	}
}
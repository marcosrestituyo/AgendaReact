import React from 'react';
import Agendas from './Agenda';
import Agregar from './AgregarContacto';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Agendas} />
                    <Route exact path='/contacto/nuevo' component={Agregar} />
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }


}

export default App;
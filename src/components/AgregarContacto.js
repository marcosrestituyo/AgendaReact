import React from 'react';
import './styles/Magendas.css';
import { async } from 'q';

class AgregarContacto extends React.Component{

    /* constructor(props) {
        super(props);
         this.state = {
             nombre: '',
             apellido: '',
             telefono: ''
         }
    } */

    state = {}

    handleSubmit = async e => {
        e.preventDefault();

        try {
            console.log(this.state);

        let res = await fetch("http://www.raydelto.org/itla/agenda/",
        {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(this.state)
        });

        let j = await res.json();

        console.log(j);
        } catch (error) {
            console.log(error);
        }

        


    }

    handleChange = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }

    render(){
        return (

            <div className="Formulario mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <input type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="First name"
                            onChange = {this.handleChange}
                            value = {this.state.nombre} />
                        </div>
                        <div className="col">
                            <input type="text"
                            name="apellido"  
                            className="form-control" 
                            placeholder="Last name"
                            onChange = {this.handleChange}
                            value = {this.state.apellido} />
                        </div>

                    <div className="form-row">

                        <div className="col-12">
                            <input type="tel" 
                            name="telefono" 
                            className="form-control" 
                            placeholder="Phone"
                            onChange = {this.handleChange}
                            value = {this.state.telefono} />
                        </div>
                            
                    </div>
                        <button type="submit" className="form-control btn btn-primary">Guardar Contacto</button>
                    </div>
                    
                </form>
            </div>
            
        );
    }
}

export default AgregarContacto;
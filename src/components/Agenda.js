import React from 'react';
import MAgendas from './MAgendas';
import Agregar from './Agregar';
import Load from './Load';
/* import datos from 'http://www.raydelto.org/itla/agenda/' */

class Agendas extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            load: true,
            error: null
        }
    }

    async componentDidMount(){
        await this.ObtenerContactos();
    }

    ObtenerContactos = async () =>{
        try {
            let res = await fetch("http://www.raydelto.org/itla/agenda/");
            let data = await res.json();

            this.setState({
                data,
                load: false
            })

        } catch (error) {
            
        }
        
    }

    render(){

        if (this.state.load) 
            return (<Load />);

        return(

            <div>
            
                <div>
                    <Agregar />
                </div>

                <div>
                    {this.state.data.map((res) =>{
                        return(
                        <MAgendas nombre = {res.nombre}
                        apellido = {res.apellido}
                        telefono = {res.telefono}/>
                        )
                    })}
                
                </div>
            </div>
        );
    
    }

}

export default Agendas;
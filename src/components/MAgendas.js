import React from 'react';
import './styles/Magendas.css';

class MAgendas extends React.Component{

    /* constructor(props) {
        super(props);
        this.state = {
            
        }
    } */

    render(){
        const {
            nombre,
            apellido,
            telefono
        } = this.props;
        return(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{nombre} {apellido}</h5>
                        <p className="card-text">{telefono}</p>
                    </div>
                 </div>


                 
        );
    }

}

export default MAgendas;
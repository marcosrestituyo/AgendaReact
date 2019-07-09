import React from 'react';
import {Link} from 'react-router-dom';

function Agregar(props) {
    return(

        <Link to="/contacto/nuevo" className="mx-auto badge badge-Success">
            <h3>Agregar Contacto</h3>
        </Link>

    );
}

export default Agregar;
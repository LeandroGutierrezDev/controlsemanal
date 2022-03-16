import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
    //definir cantidad
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(0);

    //Función que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));
    };

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        //Si pasa las validaciones
        guardarError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    };

    return (
        <Fragment>
            <h2> Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;

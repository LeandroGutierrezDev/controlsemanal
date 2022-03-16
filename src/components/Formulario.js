import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault();

        //Validar
        if (
            cantidadGasto < 1 ||
            isNaN(cantidadGasto) ||
            nombreGasto.trim() === ""
        ) {
            setError(true);
            return;
        }
        setError(false);

        //Construir el gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate(),
        };

        //Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true)

        //Resetear el formulario
        setNombreGasto("");
        setCantidadGasto(0);
    };

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>

            {error ? (
                <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
            ) : null}

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Trasnporte"
                    value={nombreGasto}
                    onChange={(e) => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidadGasto}
                    onChange={(e) =>
                        setCantidadGasto(parseInt(e.target.value, 10))
                    }
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
}

export default Formulario;

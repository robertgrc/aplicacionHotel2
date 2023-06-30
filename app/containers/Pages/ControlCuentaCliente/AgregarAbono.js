import React, { useState } from 'react';
import hotelApi from '../../../api/hotelApi';

const AgregarAbono = ({ nombrePax, numeroHabitacion, nombreRecepcionista=nombrePax }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [abonoData, setAbonoData] = useState({
    fecha: currentDate,
    detalleAbono: '',
    abono: '',
  });

  const [abonos, setAbonos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbonoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAbono = {
      numeroHabitacion,
      nombrePax,
      nombreRecepcionista,
      ...abonoData,
    };
    setAbonos((prevAbonos) => [...prevAbonos, nuevoAbono]);
    setAbonoData({
      fecha: currentDate,
      detalleAbono: '',
      abono: '',
    });
  };
  
  return (
    // <div>
    //   <table id="tabla-componente">
    //     <tbody>
    //       <tr>
    //         <td>Habitacion:</td>
    //         <td>{numeroHabitacion}</td>
    //       </tr>
    //       <tr>
    //         <td>Nombre Pax:</td>
    //         <td>{nombrePax}</td>
    //       </tr>
    //       <tr>
    //         <td>Nombre Recepcionista:</td>
    //         <td>NombreRecepcionista</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Fecha</th>
    //         <th>Detalle Abono</th>
    //         <th>Abono</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>{currentDate.toLocaleDateString()}</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       {/* Aquí puedes agregar las filas de la tabla */}
    //     </tbody>
    //   </table>
    // </div>
    <div>
    <h2>Información de la Reserva</h2>
    <p>Número de Habitación: {numeroHabitacion}</p>
    <p>Nombre del Pasajero: {nombrePax}</p>
    <p>Nombre del Recepcionista: {nombreRecepcionista}</p>

    <h2>Registrar Abono</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input
          type="text"
          name="fecha"
          value={abonoData.fecha}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Detalle Abono:
        <input
          type="text"
          name="detalleAbono"
          value={abonoData.detalleAbono}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Abono:
        <input
          type="text"
          name="abono"
          value={abonoData.abono}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>

    <h2>Abonos Registrados</h2>
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Detalle Abono</th>
          <th>Abono</th>
        </tr>
      </thead>
      <tbody>
        {abonos.map((abono, index) => (
          <tr key={index}>
            <td>{currentDate.toLocaleDateString()}</td>
            <td>{abono.detalleAbono}</td>
            <td>{abono.abono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default AgregarAbono;
import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponent = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        ClienteService.getAllClientes().then(response => {
            setClientes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])


  return (
    <div className='container'>
        <h2 className='text-center'>Lista de clientes</h2>
        <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar cliente</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>EMAIL</th>
            </thead>

            <tbody>

                {
                    clientes.map(
                        
                        cliente => 

                        <tr key={cliente.id}>


                            <td>{cliente.id}</td>    
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>



                        </tr>
                        
                        
                        )
                    
                }

            </tbody>

        </table>
    </div>
  )
}

export default ListClientesComponent;

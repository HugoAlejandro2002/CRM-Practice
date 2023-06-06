import React from 'react';
import ClientInterface from '../Models/ClientInterface';
import { addClients, getClient } from '../services/clientsService';
import EditClientForm from '../components/EditClientForm';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';

const AddClientPage = () => {
  // const location = useLocation()

  // const params = useParams()
  // const {clientID}:any = params

  // if(clientID){
  //   // const {data}:any =  useLoaderData(clientID);
  //   // console.log(data)
  // }

  const handleSave = async (client: ClientInterface) => {
    try {
      await addClients(client);
    } catch (error) {
      console.error('Error al agregar el cliente:', error);
    }
  };

  const handleCancel = () => {
  };

  return (
    <div>
      <EditClientForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default AddClientPage;

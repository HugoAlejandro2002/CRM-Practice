import React from 'react';
import ClientInterface from '../Models/ClientInterface';
import { addClients } from '../services/clientsService';
import EditClientForm from '../components/EditClientForm';


const AddClientPage = () => {

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

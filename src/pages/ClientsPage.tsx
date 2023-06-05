import React, { useEffect, useState } from 'react'
import ClientInterface from '../Models/ClientInterface'
import { useLoaderData } from 'react-router-dom';
import ClientTable from '../components/ClientTable';
import { deleteClient } from '../services/clientsService';

const ClientsPage = () => {

  const [clients, setClients] = useState<ClientInterface[]>([]);
  const { data }: any = useLoaderData();

  useEffect(() => {
    setClients(data)
  }, [])



  const handleDelete = async (updatedClient: ClientInterface) => {
  
      try {
        await deleteClient(updatedClient);
        const updatedClients = clients.filter((client) => client.id !== updatedClient.id);
        setClients(updatedClients);
      } catch (error) {
        console.error('Error al eliminar el cliente:', error);
      }

  };

  const handleEdit = (updatedClient: ClientInterface) => {
    // Actualizar el cliente en el arreglo 'clients'
    const updatedClients = clients.map((client) =>
      client.id === updatedClient.id ? updatedClient : client
    );
    setClients(updatedClients);


  };

  return (
    <div className='w-full'>

      <ClientTable clients={clients} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default ClientsPage
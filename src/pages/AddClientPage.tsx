import React, { useEffect } from 'react';
import ClientInterface from '../Models/ClientInterface';
import { addClients, updateClient } from '../services/clientsService';
import EditClientForm from '../components/EditClientForm';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const AddClientPage = () => {
  const { clientID }: any = useParams();
  const navigate = useNavigate();
  const [clientData, setClientData] = React.useState<ClientInterface | null>(null);
  const { data }: any = useLoaderData();
  


  useEffect(() => {
    if (clientID) {
      setClientData(data)
    }
  }, [clientID]);

  const handleSave = async (client: ClientInterface) => {
    try {
      if (clientID) {
        await updateClient(client);
      } else {
        await addClients(client);
      }
      navigate('/home/clients'); // Redirigir después de guardar/actualizar el cliente
    } catch (error) {
      console.error('Error al agregar/actualizar el cliente:', error);
    }
  };

  const handleCancel = () => {
    navigate('/home/clients'); // Redirigir al cancelar
  };

  return (
    <div>
      <EditClientForm onSave={handleSave} onCancel={handleCancel} initialData={clientData} />
    </div>
  );
};

export default AddClientPage;

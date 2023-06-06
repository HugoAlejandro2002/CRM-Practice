import React, { useEffect } from 'react';
import ClientInterface from '../Models/ClientInterface';
import { addClients, getClientById, updateClient } from '../services/clientsService';
import EditClientForm from '../components/EditClientForm';
import { useNavigate, useParams } from 'react-router-dom';

const AddClientPage = () => {
  const { clientID }: any = useParams();
  const navigate = useNavigate();
  const [clientData, setClientData] = React.useState<ClientInterface | null>(null);

  useEffect(() => {
    if (clientID) {
      // Cargar datos del cliente existente si se proporciona clientID
      const fetchClient = async () => {
        try {
          const client = await getClientById(clientID);
          setClientData(client.data);
        } catch (error) {
          console.error('Error al cargar los datos del cliente:', error);
        }
      };
      fetchClient();
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

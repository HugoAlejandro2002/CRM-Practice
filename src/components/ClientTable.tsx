import React from 'react';
import ClientInterface from '../Models/ClientInterface';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface ClientTableProps {
  clients: ClientInterface[];
  onEdit: (client: ClientInterface) => void;
  onDelete: (client: ClientInterface) => void;
}

const ClientTable = ({ clients, onEdit, onDelete }: ClientTableProps) => {
  return (
    <table className="w-full border border-blue-500">
      <thead>
        <tr className="bg-blue-200 text-blue-900">
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">Apellido</th>
          <th className="py-2 px-4">Empresa</th>
          <th className="py-2 px-4">Acción</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => (
          <tr key={index}>
            <td className="py-2 px-4">{client.name}</td>
            <td className="py-2 px-4">{client.lastName}</td>
            <td className="py-2 px-4">{client.company}</td>
            <td className="py-2 px-4">
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onEdit(client)}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onDelete(client)}
                >
                  <FiTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;

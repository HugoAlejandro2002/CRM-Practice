import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import ClientInterface from '../Models/ClientInterface';

interface EditFormProps {
  onSave: (client: ClientInterface) => void;
  onCancel: () => void;
}

const EditClientForm = ({ onSave, onCancel }: EditFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: ClientInterface) => {
    const newClient: ClientInterface = {
      id: uuidv4(),
      ...data,
    };
    onSave(newClient);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Agregar Cliente</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Nombre:</label>
          <input type="text" {...register('name', { required: true })} className="border border-gray-300 p-2 w-full" />
          {errors.name && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div>
          <label className="block mb-1">Apellido:</label>
          <input type="text" {...register('lastName', { required: true })} className="border border-gray-300 p-2 w-full" />
          {errors.lastName && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div>
          <label className="block mb-1">Empresa:</label>
          <input type="text" {...register('company', { required: true })} className="border border-gray-300 p-2 w-full" />
          {errors.company && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">Guardar</button>
          <button type="button" onClick={onCancel} className="border border-gray-300 py-2 px-4 rounded">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditClientForm;

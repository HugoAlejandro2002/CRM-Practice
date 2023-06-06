import ClientInterface from "../Models/ClientInterface";
import { crmAPI } from "./crmInstance";


export const getClients = async () => {
    return crmAPI.get('/clients');
}

export const addClients = async (client:ClientInterface) => {
    return crmAPI.post('/clients',client);
}

export const deleteClient = async (client:ClientInterface) => {
    crmAPI.delete(`/clients/${client.id}`);
}

export const getClientById = async (client:string) => {
    return crmAPI.get(`/clients/${client}`);
}

export const updateClient = async (client:ClientInterface) => {
    return crmAPI.put(`/clients/${client.id}`,client);
}
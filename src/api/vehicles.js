import axios from 'axios';

const instanceVehicles = axios.create({
  baseURL: 'https://65f6113441d90c1c5e0a90ae.mockapi.io/',
});

export const fetchVehiclesApi = async () => {
  const { data } = await instanceVehicles.get('track');
  return data;
};


export const getVehicleById = async vehicleId => {
    const { data } = await instanceVehicles.get(`track/${vehicleId}`);
    return data;
};



// import { axiosInstance } from '@/lib/axiosInstance';
import axios from 'axios';
import { currentAddress, userLocation } from '@/types/location';

export const getCurrentAddress = async (params: userLocation): Promise<currentAddress> => {
  const { data } = await axios.get('/api/getRegion', {
    params: { x: params.longitude, y: params.latitude },
  });
  return data.documents[0];
}

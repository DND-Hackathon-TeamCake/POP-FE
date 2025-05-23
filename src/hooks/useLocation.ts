import { useEffect, useState } from 'react';
import { userLocation } from '@/types/location';
import { handleApi } from '@/utils/handleApi';
import { getCurrentAddress } from '@/services/locationService';

const useLocation = () => {
  const [location, setLocation] = useState<userLocation | null>(null);
  const [depthName, setDepthName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    if (!location) return;

    const fetchAddress = async () => {
      const data = await handleApi(() => getCurrentAddress(location));
      if (data.data?.region_2depth_name) setDepthName(data.data?.region_2depth_name);
      else setError("주소 불러오기 실패");
    };

    fetchAddress();
  }, [location])
  return { location, error, depthName };

};

export default useLocation;
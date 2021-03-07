import http from '../Utils/http';

const BASE_API = 'https://6033c4d8843b15001793194e.mockapi.io/api';

const LOCATIONS_PATH = '/locations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllLocations: any = () => {
  return http.get(`${BASE_API}${LOCATIONS_PATH}`);
};

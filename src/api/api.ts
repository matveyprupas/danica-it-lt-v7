import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Films } from '../models/Film';
import { Character } from '../models/Character';

const URLS = {
    SWAPI_API: {
        BASE_URL: 'https://swapi.dev/api/',
        FILMS: 'films',
    }
}

export const httpClientSwapiApi = axios.create({
    baseURL: URLS.SWAPI_API.BASE_URL
  });

const swapiApi = (httpClient: AxiosInstance) => ({
  getFilms(): Promise<AxiosResponse<Films>> {

    return httpClient.get(`/${URLS.SWAPI_API.FILMS}`);
  },
  getCharacter(characterUrl: string): Promise<AxiosResponse<Character>> {

    return httpClient.get(characterUrl);
  },
});
  
const api = {
    swapiApi: swapiApi(httpClientSwapiApi),
};

export default api;
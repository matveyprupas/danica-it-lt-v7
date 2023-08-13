import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import API_PATHS from '../constants/api';
import { Films } from '../models/Film';

export function useFilms() {
    return useQuery<Films, AxiosError>(
      'films-list',
      async () => {
        const res = await axios.get<Films>(
          `${API_PATHS.swapi}/films`
        );
        return res.data;
      }
    );
  }
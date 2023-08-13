import * as Yup from 'yup';

export const FilmSchema = Yup.object({
    'episode_id': Yup.number().required(),
    'title': Yup.string().required().default(''),
    'opening_crawl': Yup.string().default(''),
    'director': Yup.string().default(''),
    'producer': Yup.string().default(''),
    'release_date': Yup.string().default(''),
    'created': Yup.string().default(''),
    'edited': Yup.string().default(''),
    'url': Yup.string().default(''),
    'characters': Yup.array().of(Yup.string()).defined(),
    'planets': Yup.array().of(Yup.string()).defined(),
    'starships': Yup.array().of(Yup.string()).defined(),
    'vehicles': Yup.array().of(Yup.string()).defined(),
    'species': Yup.array().of(Yup.string()).defined(),
  });

export const FilmsSchema = Yup.object({
  'count': Yup.number(),
  'next': Yup.string().default(''),
  'previous': Yup.string().default(''),
  'results': Yup.array().of(FilmSchema).defined(),
});

export type Film = Yup.InferType<typeof FilmSchema>;
export type Films = Yup.InferType<typeof FilmsSchema>;

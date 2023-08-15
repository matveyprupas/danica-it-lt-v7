import * as Yup from 'yup';

export const CharacterSchema = Yup.object({
    'name': Yup.string().required(),
    'height': Yup.string().default(''),
    'mass': Yup.string().default(''),
    'hair_color': Yup.string().default(''),
    'skin_color': Yup.string().default(''),
    'eye_color': Yup.string().default(''),
    'birth_year': Yup.string().default(''),
    'gender': Yup.string().default(''),
    'homeworld': Yup.string().default(''),
    'films': Yup.array().of(Yup.string()).defined(),
    'species': Yup.array().of(Yup.string()).defined(),
    'vehicles': Yup.array().of(Yup.string()).defined(),
    'starships': Yup.array().of(Yup.string()).defined(),
    'created': Yup.string().required().default(''),
    'url': Yup.string().required().default(''),
  });

export const CharactersSchema = Yup.object({
  'count': Yup.number(),
  'next': Yup.string().default(''),
  'previous': Yup.string().default(''),
  'results': Yup.array().of(CharacterSchema).defined(),
});

export type Character = Yup.InferType<typeof CharacterSchema>;
export type Characters = Yup.InferType<typeof CharactersSchema>;

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterComponent } from './Character';

const characterData = {
	'name': 'Luke Skywalker',
	'height': '172',
	'mass': '77',
	'hair_color': 'blond',
	'skin_color': 'fair',
	'eye_color': 'blue',
	'birth_year': '19BBY',
	'gender': 'male',
	'homeworld': 'https://swapi.dev/api/planets/1/',
	'films': [
		'https://swapi.dev/api/films/1/',
		'https://swapi.dev/api/films/2/',
		'https://swapi.dev/api/films/3/',
		'https://swapi.dev/api/films/6/'
	],
	'species': [],
	'vehicles': [
		'https://swapi.dev/api/vehicles/14/',
		'https://swapi.dev/api/vehicles/30/'
	],
	'starships': [
		'https://swapi.dev/api/starships/12/',
		'https://swapi.dev/api/starships/22/'
	],
	'created': '2014-12-09T13:50:51.644000Z',
	'edited': '2014-12-20T21:17:56.891000Z',
	'url': 'https://swapi.dev/api/people/1/'
}

test('renders CharacterComponent', () => {
  render(<CharacterComponent id={1} character={{...characterData}} />);
  const linkElement = screen.getByText(/Luke Skywalker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CharacterComponent have class character_odd', () => {
  render(<CharacterComponent id={2} character={{...characterData}} />);
  const linkElement = screen.getByText(/Luke Skywalker/i);
  expect(linkElement.parentElement).toHaveClass('character_odd');
});

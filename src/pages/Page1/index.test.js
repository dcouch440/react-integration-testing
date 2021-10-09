import { act, render, screen } from '@testing-library/react';
import axios from 'axios';
import AxiosAdapter from 'axios-mock-adapter';
import Page1 from '.';

const mock = new AxiosAdapter(axios);

describe('Page1', () => {

  describe('when successful', () => {

    it('returns a list of cards after an api call is made', async () => {

      const data = [
        {
          "id": 1,
          "title": "Card 1",
          "image": "/favicon.ico"
        },
        {
          "id": 2,
          "title": "Card 2",
          "image": "/favicon.ico"
        },
        {
          "id": 3,
          "title": "Card 3",
          "image": "/favicon.ico"
        },
        {
          "id": 4,
          "title": "Card 4",
          "image": "/favicon.ico"
        }
      ];

      mock
        .onGet('/cardRequestData.json')
        .reply(200, data);

      await act(async () => render(<Page1 />));

      const titles = await screen.findAllByText(/Card/i);
      const images = await screen.findAllByRole('img');

      expect(images.length).toEqual(4);
      expect(titles.length).toEqual(4);
    });

  });

  describe('when unsuccessful', () => {

    it('displays an error message on the page', async () => {
      mock
        .onGet('/cardRequestData.json')
        .reply(400);
      await act(async () => render(<Page1 />));
      const badRequestText = await screen.findByTestId('api-error');

      expect(badRequestText).toBeInTheDocument();
    });

  });

});
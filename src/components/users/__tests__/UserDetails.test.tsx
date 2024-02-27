
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserDetails from '../UserDetails';

describe('UserDetails component', () => {
  test('renders user details when data is fetched successfully', async () => {
    const mockUserData = {
      id: 1,
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUserData,
    });

    render(<UserDetails id_val="1" />);

    await waitFor(() => {
      expect(screen.getByText('User id: 1')).toBeInTheDocument();
      expect(screen.getByText('Email: george.bluth@reqres.in')).toBeInTheDocument();
      expect(screen.getByText('First Name: George')).toBeInTheDocument();
      expect(screen.getByText('Second Name: Bluth')).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/users/1');
  });

  
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Users from '../Users';

describe('Users component', () => {
  it('should render UserError component with error message for "abc" param', () => {
    render(
    <MemoryRouter initialEntries={['/abc']}>
        <Routes>
            <Route path="/:id" element={<Users/>}/>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Wrong type of the parameter passed to the url. Make sure you put the positive integer.')).toBeInTheDocument();
  });
  it('should render UserError component with error message for "-1" param', () => {
    render(
    <MemoryRouter initialEntries={['/-1']}>
        <Routes>
            <Route path="/:id" element={<Users/>}/>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Wrong type of the parameter passed to the url. Make sure you put the positive integer.')).toBeInTheDocument();
  });

    it('should render UserError component when API call fails', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));
  
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
        <Route path="/:id" element={<Users/>}/>
        </Routes>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByText('There is an error coming from the back-end response.')).toBeInTheDocument();
    });
  });
  
  it('should render UserDetails component with corresponding user details when API call is successful', async () => {
    const mockUserData = {
      id: 1,
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
    };
  
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData,
    });
  
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Users />} />
        </Routes>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByText('User id: 1')).toBeInTheDocument();
      expect(screen.getByText('Email: george.bluth@reqres.in')).toBeInTheDocument();
      expect(screen.getByText('First Name: George')).toBeInTheDocument();
      expect(screen.getByText('Second Name: Bluth')).toBeInTheDocument();
    });
  });

  
});

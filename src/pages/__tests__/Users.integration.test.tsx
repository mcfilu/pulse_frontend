import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import Users from '../Users';

describe('Users component', () => {
  it('should render UserError component with error message for "abc" param', () => {
    render(
      <MemoryRouter initialEntries={['/abc']}>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByText('Wrong type of the parameter passed to the url. Make sure you put the positive integer.')).toBeInTheDocument();
  });
  it('should render UserError component with error message for "-1" param', () => {
    render(
      <MemoryRouter initialEntries={['/-1']}>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByText('Wrong type of the parameter passed to the url. Make sure you put the positive integer.')).toBeInTheDocument();
  });
//   it('should render UserDetails component with correct values for "3" param', async () => {
//     // Mock the fetch call
//     const mockUserData = {
//         id: 1,
//         avatar: 'https://reqres.in/img/faces/1-image.jpg',
//         email: 'george.bluth@reqres.in',
//         first_name: 'George',
//         last_name: 'Bluth',
//       };
  
//       global.fetch = jest.fn().mockResolvedValue({
//         ok: true,
//         json: async () => mockUserData,
//       });

//     render(
//       <MemoryRouter initialEntries={['/1']}>
//         <Users />
//       </MemoryRouter>
//     );

//     // Wait for UserDetails component to render
//     await waitFor(() => {
//       expect(screen.getByText('User id: 1')).toBeInTheDocument();
//       // Add assertions for other user information if needed
//     });
//   });

  
});

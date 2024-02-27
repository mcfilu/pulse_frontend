import React from 'react';
import { render, screen } from '@testing-library/react';
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

  
});

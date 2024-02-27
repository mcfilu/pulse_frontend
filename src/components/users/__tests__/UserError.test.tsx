// UserError.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserError from '../UserError';

test('renders user error message with certain given message value', () => {
    const testErrorMessage = 'This is a test error message I have selected.';
    render(<UserError errorMessage={testErrorMessage} />);
  
    const errorMessageElement = screen.getByText(testErrorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });
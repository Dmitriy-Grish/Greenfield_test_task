import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../utils/test.utils';

import SignIn from './sign-in.component';

describe('Sign In Page', () => {
  it('initially renders the component correctly', () => {
    renderWithRedux(<SignIn />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Sign In');

    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Sign In');
  });

  it('allows user to type in the username field', () => {
    renderWithRedux(<SignIn />);

    const input = screen.getByPlaceholderText(/Username/i);
    userEvent.type(input, 'John Dou');
    expect(screen.getByDisplayValue('John Dou')).toBeInTheDocument();
  });

  it('allows user to type in the password field', () => {
    renderWithRedux(<SignIn />);

    const input = screen.getByPlaceholderText(/Password/i);
    userEvent.type(input, '12345');
    expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
  });

  it('handles sending invalid values', () => {
    renderWithRedux(<SignIn />);

    userEvent.type(screen.getByPlaceholderText(/Username/i), 'John Dou');
    userEvent.type(screen.getByPlaceholderText(/Password/i), '12345');
    userEvent.click(screen.getByRole('button'));

    expect(
      screen.getByText('Wrong password or username, please try again')
    ).toBeInTheDocument();
  });

  it('clears input fields when an error occurs', () => {
    renderWithRedux(<SignIn />);

    const username = screen.getByPlaceholderText(/Username/i);
    const password = screen.getByPlaceholderText(/Password/i);

    userEvent.type(username, 'John Dou');
    userEvent.type(password, '12345');
    userEvent.click(screen.getByRole('button'));

    expect(username).toHaveTextContent('');
    expect(password).toHaveTextContent('');
  });

  it('removes the error message, when the user starts typing', () => {
    renderWithRedux(<SignIn />);

    const username = screen.getByPlaceholderText(/Username/i);

    userEvent.type(username, 'John Dou');
    userEvent.type(screen.getByPlaceholderText(/Password/i), '12345');
    userEvent.click(screen.getByRole('button'));

    const error = screen.getByText('Wrong password or username, please try again');

    expect(error).toBeInTheDocument();

    userEvent.type(username, 'J');
    expect(error).not.toBeInTheDocument();
  });
});

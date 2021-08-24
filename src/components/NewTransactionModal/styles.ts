import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--color-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    background-color: var(--color-background-input);
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    padding: 0 1.5rem;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--color-text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    color: var(--color-shape);
    background-color: var(--color-secundary);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#D1DFD7',
  red: '#E6D4D7'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  
  background-color: ${(props) => props.isActive
    ? colors[props.activeColor]
    : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--color-title);
  }
`;
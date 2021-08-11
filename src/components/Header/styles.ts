import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    font-size: 1rem;
    background-color: var(--color-btn-primary);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
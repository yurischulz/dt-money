import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-title);
  background-color: var(--color-shape);
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    > div {
      font-size: 2rem;
      line-height: 2rem;
      span {
        font-size: 1rem;
      }
    }
  }

  &.highlight-background {
    color: var(--color-shape);
    background-color: var(--color-secundary);
  }
`;
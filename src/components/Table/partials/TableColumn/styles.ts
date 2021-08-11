import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-shape);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  grid-template-rows: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;

  &.input {
    .price > div {
      color: var(--color-secundary);
    }
  }

  &.output {
    .price > div {
      color: var(--color-third);
    }
  }
`;
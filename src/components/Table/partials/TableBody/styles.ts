import styled from 'styled-components';

export const Container = styled.div`
`;

export const TableColumn = styled.div`
  background-color: var(--color-shape);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  grid-template-rows: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;

  &.input {
    .amount > div {
      color: var(--color-secundary);
    }
  }

  &.output {
    .amount > div {
      color: var(--color-third);
    }
  }
`;

export const TableRow = styled.div`
   padding: 1rem 2rem;
   line-height: 1.25rem;

   &:first-child {
      color: var(--color-title);
   }
`;
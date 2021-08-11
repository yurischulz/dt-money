import styled from 'styled-components';

export const TableHeader = styled.div`
 display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  grid-template-rows: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
`;

export const Row = styled.div`
   color: var(--color-text);
   font-weight: 400;
   padding: 1rem 2rem;
   text-align: left;
   line-height: 1.5rem;
`;
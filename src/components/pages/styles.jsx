import styled from 'styled-components/macro';

export const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-align: start;
`;

export const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

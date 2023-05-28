import styled from 'styled-components/macro';

type StyledTextBuilderProps = {
  textType: string;
  children: string | JSX.Element | JSX.Element[];
};

export const StyledTextBuilder = ({
  textType = 'h1',
  children = '',
}: StyledTextBuilderProps) => {
  const StyledText = styled[textType]`
    color: ${(props) => props.theme.colors.text};
  `;
  return <StyledText>{children}</StyledText>;
};

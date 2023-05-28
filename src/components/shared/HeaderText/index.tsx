import { FC } from 'react';
import { StyledTextBuilder } from '@/components/shared/UtilityElements/styles';
import { StyledHeaderContent } from './styles';

import parse from 'html-react-parser';

interface IText {
  text: {
    title: { h1: string; h2: string };
    description: string;
    quote?: string | undefined;
  };
}

const HeaderText: FC<IText> = ({ text }: IText) => {
  const { title, description, quote } = text;
  const parsedQuote = quote ? parse(quote) : '';
  return (
    <StyledHeaderContent className='s'>
      <StyledTextBuilder textType='h1'>{title.h1}</StyledTextBuilder>
      <StyledTextBuilder textType='h2'>{title.h2}</StyledTextBuilder>
      <StyledTextBuilder textType='span'>{description}</StyledTextBuilder>

      {parsedQuote && (
        <div>
          <q>
            <StyledTextBuilder textType='i'>{parsedQuote}</StyledTextBuilder>
          </q>
        </div>
      )}
    </StyledHeaderContent>
  );
};

export { HeaderText };

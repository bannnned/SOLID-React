import { FC } from 'react';

interface IText {
  text: {
    title: { h1: string; h2: string };
    description: string;
    quote?: string | TrustedHTML;
  };
}

const HeaderText: FC<IText> = ({ text }: IText) => {
  const { title, description, quote } = text;
  return (
    <div className='s'>
      <h1>{title.h1}</h1>
      <h2>{title.h2}</h2>
      <span>{description}</span>

      {quote && (
        <div>
          {' '}
          <br />
          <br />
          <q>
            <i dangerouslySetInnerHTML={{ __html: quote }}></i>
          </q>
        </div>
      )}
    </div>
  );
};

export { HeaderText };

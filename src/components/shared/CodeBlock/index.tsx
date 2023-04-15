import { FC } from 'react';

// Styled
import { StyledCodeBlock, StyledButton } from './styles.jsx';

interface IText {
  text: string;
  lang: keyof typeof Languages;
}

enum Languages {
  'js' = 'language-javascript',
}

const CodeBlock: FC<IText> = ({ text, lang }: IText) => {
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCopy = () => {
    copyContent();
  };

  return (
    <StyledCodeBlock>
      <StyledButton onClick={handleCopy}>copy</StyledButton>
      <code className={Languages[lang]}>{text}</code>
    </StyledCodeBlock>
  );
};

export { CodeBlock };

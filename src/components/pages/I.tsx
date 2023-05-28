import { useEffect, FC } from 'react';

// Components
import { RobotsComposition } from '@/components/shared/RobotsComposition';
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badIPrinciple, goodIPrinciple } from '@/components/data/codeExamples';

// Styles
import { StyledParagraph, StyledTextContent } from './styles';

const I: FC = () => {
  const headerText = {
    title: {
      h1: 'Принцип разделения интерфейса',
      h2: 'Interface Segregation Principle - ISP',
    },
    description: `Клиенты не должны зависеть от интерфейсов, которые они не используют.
        Это означает, что компоненты должны иметь только те методы, которые им
        необходимы для выполнения своих функций.`,
    quote: `Никакой клиент не должен быть вынужден зависеть от методов, которые он не использует. 
    Или, другими словами, большие интерфейсы должны быть разбиты на маленькие интерфейсы.`,
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const wrongSideComponents = {
    components: [
      {
        positionY: 'top',
        positionX: 'left',
        text: 'Я могу готовить еду, мыть полы, вскрывать замки, но медленно',
      },
    ],
  };
  const rightSideComponents = {
    grid: '3x1',
    components: [
      {
        positionY: 'bottom',
        positionX: 'left',
        scale: 'small',
        text: 'Я могу готовить еду и делаю это быстро',
      },
      {
        positionY: 'bottom',
        positionX: 'left',
        scale: 'small',
        text: 'Я могу мыть полы и делаю это быстро',
      },
      {
        positionY: 'bottom',
        positionX: 'left',
        scale: 'small',
        text: 'Я могу вскрывать замки и делаю это быстро',
      },
    ],
  };
  return (
    <div>
      <HeaderText text={headerText} />
      <RobotsComposition
        wrongSideComponents={wrongSideComponents}
        rightSideComponents={rightSideComponents}
        vertical
      />
      <StyledTextContent>
        <StyledParagraph>
          Примерr компонента, который нарушает этот принцип:
        </StyledParagraph>
        <CodeBlock text={badIPrinciple} lang={'js'} />
        <StyledParagraph>
          В этом компоненте интерфейс для клика на продукте и добавления в
          корзину объединены в одном компоненте. Это нарушает Принцип разделения
          интерфейса, так как пользовательский интерфейс для этих двух функций
          может изменяться независимо друг от друга. Например, если мы захотим
          добавить функциональность для отправки продукта в избранное, нам
          придется изменять этот компонент, чтобы добавить новую кнопку и
          обработчик событий. Это означает, что мы меняем интерфейс компонента,
          чтобы поддерживать новую функциональность, и нарушаем Принцип
          разделения интерфейса SOLID. Чтобы исправить этот компонент, мы можем
          разделить его интерфейс на две отдельные части: одну для обработки
          клика на продукте, а другую для добавления продукта в корзину. Для
          этого мы можем создать два отдельных компонента ProductImage и
          AddToCartButton, которые будут использоваться внутри компонента
          Product.
        </StyledParagraph>
        <StyledParagraph>
          Вот исправленный код компонента, который разделяет интерфейс на две
          отдельные части:
        </StyledParagraph>
        <CodeBlock text={goodIPrinciple} lang={'js'} />
        <StyledParagraph>
          Теперь мы используем компонент ProductImage для обработки клика на
          изображении продукта, а компонент AddToCartButton для добавления
          продукта в корзину. Каждый компонент имеет свой собственный интерфейс,
          который можно изменять независимо от других компонентов, не нарушая
          при этом Принцип разделения интерфейса SOLID.
        </StyledParagraph>
      </StyledTextContent>
    </div>
  );
};

export { I };

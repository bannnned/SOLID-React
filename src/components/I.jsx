import React, { useEffect } from "react";
import { RobotMessage } from "./shared/RobotMessage";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { badIPrinciple, goodIPrinciple } from "./utils/codeExamples";

const I = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="I">
      {" "}
      <h1>Принцип разделения интерфейса</h1>
      <h1>Interface Segregation Principle - ISP</h1>
      <p>
        Клиенты не должны зависеть от интерфейсов, которые они не используют.
        Это означает, что компоненты должны иметь только те методы, которые им
        необходимы для выполнения своих функций.
      </p>
      <div className="images">
        <RobotMessage
          positionX="top"
          positionY="left"
          text={"Я могу готовить еду, мыть полы, вскрывать замки, но медленно"}
        />
        <div className="images__group3x1 padding-top-50">
          <RobotMessage
            positionX="top"
            positionY="left"
            text={"Я могу готовить еду и делаю это быстро"}
            scale="small"
          />
          <RobotMessage
            positionX="top"
            positionY="left"
            text={"Я могу мыть полы и делаю это быстро"}
            scale="small"
          />
          <RobotMessage
            positionX="top"
            positionY="left"
            text={"Я могу вскрывать замки и делаю это быстро"}
            scale="small"
          />
        </div>
        <div className="dot dot-red"></div>
        <div className="dot dot-green"></div>
      </div>
      <div className="examples">
        <p>Примерr компонента, который нарушает этот принцип:</p>
        <pre>
          <code className={`language-javascript`}>{badIPrinciple}</code>
        </pre>
        <p>
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
        </p>
        <p>
          Вот исправленный код компонента, который разделяет интерфейс на две
          отдельные части:
        </p>
        <pre>
          <code className={`language-javascript`}>{goodIPrinciple}</code>
        </pre>
        <p>
          Теперь мы используем компонент ProductImage для обработки клика на
          изображении продукта, а компонент AddToCartButton для добавления
          продукта в корзину. Каждый компонент имеет свой собственный интерфейс,
          который можно изменять независимо от других компонентов, не нарушая
          при этом Принцип разделения интерфейса SOLID.
        </p>
      </div>
    </div>
  );
};

export { I };

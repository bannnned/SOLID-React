const badSPrinciple = `import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

const goodSPrinciple = `import React, { useState } from 'react';

function Todo({addTask, deleteTask}) {
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <TodosList deleteTask={deleteTask} />
    </div>
  );
}`;

const badOPrinciple = `import React from 'react';

function Shape(props) {
  if (props.shapeType === 'circle') {
    return <Circle radius={props.radius} />;
  } else if (props.shapeType === 'rectangle') {
    return <Rectangle width={props.width} height={props.height} />;
  } else if (props.shapeType === 'triangle') {
    return <Triangle base={props.base} height={props.height} />;
  }
}

function Circle(props) {
  const area = Math.PI * props.radius * props.radius;
  return <div>Area of circle with radius {props.radius}: {area}</div>;
}

function Rectangle(props) {
  const area = props.width * props.height;
  return <div>Area of rectangle with width {props.width} and height {props.height}: {area}</div>;
}

function Triangle(props) {
  const area = (props.base * props.height) / 2;
  return <div>Area of triangle with base {props.base} and height {props.height}: {area}</div>;
}`;

const goodOPrinciple = `import React from 'react';

function Shape(props) {
  return <div>Area of {props.shapeType} with properties: {props.calculateArea()}</div>;
}

function Circle(props) {
  const calculateArea = () => {
    const area = Math.PI * props.radius * props.radius;
    return \`Circle with radius \${props.radius} has area \${area}\`;
  };

  return <Shape shapeType="circle" calculateArea={calculateArea} />;
}

function Rectangle(props) {
  const calculateArea = () => {
    const area = props.width * props.height;
    return \`Rectangle with width \${props.width} and height \${props.height} has area \${area}\`;
  };

  return <Shape shapeType="rectangle" calculateArea={calculateArea} />;
}

function Triangle(props) {
  const calculateArea = () => {
    const area = (props.base * props.height) / 2;
    return \`Triangle with base \${props.base} and height \${props.height} has area \${area}\`;
  };

  return <Shape shapeType="triangle" calculateArea={calculateArea} />;
}`;

const badLPrinciple = `import React, { useState } from 'react';

const Square = ({ width }) => {
  const [size, setSize] = useState(width);

  const handleClick = () => {
    setSize(size + 1);
  };

  return (
    <div style={{ width: size, height: size, backgroundColor: 'red' }} onClick={handleClick} />
  );
};

const Rectangle = ({ width, height }) => {
  const [size, setSize] = useState(width);

  const handleClick = () => {
    setSize(size + 1);
  };

  return (
    <div style={{ width: size, height: height, backgroundColor: 'blue' }} onClick={handleClick} />
  );
};

const App = () => {
  return (
    <>
      <Square width={50} />
      <Rectangle width={50} height={100} />
    </>
  );
};

export default App;`;

const goodLPrinciple = `import React, { useState } from 'react';

const Shape = ({ width, height, backgroundColor }) => {
  const [size, setSize] = useState(width);

  const handleClick = () => {
    setSize(size + 1);
  };

  return (
    <div style={{ width: size, height: height, backgroundColor: backgroundColor }} onClick={handleClick} />
  );
};

const Square = ({ width }) => {
  return <Shape width={width} height={width} backgroundColor="red" />;
};

const Rectangle = ({ width, height }) => {
  return <Shape width={width} height={height} backgroundColor="blue" />;
};

const App = () => {
  return (
    <>
      <Square width={50} />
      <Rectangle width={50} height={100} />
    </>
  );
};

export default App;`;

const badIPrinciple = `import React from "react";

function Product(props) {
  const handleProductClick = () => {
    props.onProductClick(props);
  };

  return (
    <div className="product">
      <img src={props.image} alt={props.name} onClick={handleProductClick} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button onClick={() => props.onAddToCart(props)}>Add to cart</button>
    </div>
  );
}

export default Product;;`;
const goodIPrinciple = `import React from "react";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton";

function Product(props) {
  const handleProductClick = () => {
    props.onProductClick(props);
  };

  return (
    <div className="product">
      <ProductImage image={props.image} name={props.name} onClick={handleProductClick} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <AddToCartButton product={props} onAddToCart={props.onAddToCart} />
    </div>
  );
}

export default Product;`;

const badDPrinciple = `import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = fetchData();
    setData(result);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default App;`;
const goodDPrinciple = `import { useData } from './data';

const App = () => {
  const { data } = useData();

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default App;`;

export {
  badSPrinciple,
  goodSPrinciple,
  badOPrinciple,
  goodOPrinciple,
  badLPrinciple,
  goodLPrinciple,
  badIPrinciple,
  goodIPrinciple,
  badDPrinciple,
  goodDPrinciple
};

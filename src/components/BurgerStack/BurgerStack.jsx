// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, setStack }) => {
    const handleRemove = (indexToRemove) => {
      const newStack = stack.filter((_, index) => index !== indexToRemove);
      setStack(newStack);
    };
  
    return (
      <div className="burger-stack">
        <h2>Your Burger</h2>
        <ul>
          {stack.map((ingredient, index) => (
            <li
              key={index}
              style={{
                backgroundColor: ingredient.color,
                color: 'black',
                padding: '10px',
                margin: '5px',
                borderRadius: '5px',
              }}
            >
              {ingredient.name}
              <button onClick={() => handleRemove(index)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;
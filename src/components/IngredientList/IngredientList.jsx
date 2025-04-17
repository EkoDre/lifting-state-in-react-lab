const IngredientList = ({ ingredients, setStack, stack }) => {
  const handleAdd = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  return (
    <div className="ingredient-list">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            style={{
              backgroundColor: ingredient.color,
              color: "black",
              padding: "10px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            {ingredient.name}
            <button onClick={() => handleAdd(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;

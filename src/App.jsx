// src/App.jsx
import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList.jsx";
import BurgerStack from "./components/BurgerStack/BurgerStack.jsx";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]); //   burger stack state!

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "400px",
        }}
      >
        <IngredientList
          ingredients={availableIngredients}
          setStack={setStack}
          stack={stack}
        />
        <BurgerStack stack={stack} setStack={setStack} />
      </section>
    </main>
  );
};

export default App;

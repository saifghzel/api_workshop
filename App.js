import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "./REDUX/action";
import { useState } from "react";

function App() {
  const { data, loading } = useSelector((state) => state);

  const [flavor, setFlavor] = useState("");
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail",
    params: {
      name: flavor,
    },
    headers: {
      "x-rapidapi-key": "2e8f1f9c40msh321482ab6b0d025p198b95jsn55b1b055ef8f",
      "x-rapidapi-host": "cocktail-by-api-ninjas.p.rapidapi.com",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    flavor ? dispatch(getDrinks(options)) : alert("flavor empty");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
        />
        <button type="submit"> GET DRINKS</button>
      </form>
      <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          data.map((el, index) => (
            <div key={index}>
              <h1>{el.name}</h1>
              <button>get recipe</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

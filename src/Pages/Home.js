import React, { useEffect, useState } from "react";
import { API } from "../Utils";
import styles from '../Styles/home.module.css'
import Card from "../Components/Card";

const Home = () => {
  const [input, setInput] = useState("shake");
  const [recipesList,setRecipes]=useState([]);

  useEffect(() => {
    getRecipes();
    console.log("EFFECT HAS BEEN RUN");
  }, [input]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${input}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`
    ); ///data wont arrrive instantly so need to wait
    const data = await response.json();
    setRecipes(data.hits); //all Recipes are now in the state,
    console.log(data.hits);
  };
  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.search}
      />
      <div className={styles.outerDiv}>
      {recipesList.map((item)=><Card food={item.recipe}/>)}
      </div>
      
         
      
      
    </div>
  );
};

export default Home;

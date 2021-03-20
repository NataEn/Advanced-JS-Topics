import { Component } from "react";
import "./App.css";
import { fetchData, axiosFetchData } from "./dal/fetchData";
import Recipe from "./components/Recipe/Recipe.component";
import Spinner from "./components/Spinner/Spinner.component";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    recipes: [],
    searchIngredient: "chicken",
  };
  async componentDidMount() {
    try {
      const recipes = await fetchData(this.state.searchIngredient);
      this.setState({
        isLoaded: true,
        error: null,
        recipes: [...recipes],
      });
    } catch (err) {
      this.setState({ isLoaded: true, error: err, recipes: [] });
    }
  }
  handelFetchData() {
    const recipes = this.state.recipes;
    if (!this.state.isLoaded) {
      return <Spinner />;
    } else if (this.state.isLoaded && this.state.error) {
      return <p>{this.state.error.toString()}</p>;
    } else {
      return (
        recipes &&
        recipes.map((item, index) => (
          <Recipe
            recipe={item.recipe}
            key={index}
            imgUrl={item.recipe.image}
            title={item.recipe.label}
            visit={item.recipe.url}
          />
        ))
      );
    }
  }
  render() {
    return (
      <div className="App">
        <h1>My Recipes</h1>
        {/* <input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              console.log(event.currentTarget.value);
              this.setState({ searchIngredient: event.currentTarget.value });
            }
          }}
        /> */}
        <div className="recipes-container">{this.handelFetchData()}</div>
      </div>
    );
  }
}

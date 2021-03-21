import { Component } from "react";
import "./App.css";
import { fetchData, axiosFetchData } from "./dal/fetchData";
import Recipe from "./components/Recipe/Recipe.component";
import Spinner from "./components/Spinner/Spinner.component";
import Search from "./components/Search/Search.component";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    recipes: [],
  };

  componentDidMount() {
    this.handelFetchData("chicken");
  }
  async handelFetchData(searchIngredient) {
    try {
      const recipes = await fetchData(searchIngredient);
      this.setState({
        isLoaded: true,
        error: null,
        recipes: [...recipes],
      });
    } catch (err) {
      this.setState({ isLoaded: true, error: err, recipes: [] });
    }
  }
  handelLoadData() {
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
        <Search
          onSearch={(searchTerm) => {
            console.log(searchTerm);
            this.handelFetchData(searchTerm);
          }}
        />
        <div className="recipes-container">{this.handelLoadData()}</div>
      </div>
    );
  }
}

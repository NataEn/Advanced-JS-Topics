import "./Recipe.css";

const Recipe = ({ title, imgUrl, visit }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={imgUrl} alt={title} />
      <a href={visit} rel="noopener noreferrer" target="_blank">
        visit
      </a>
    </div>
  );
};

export default Recipe;

import React, { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
        <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>

        <div className="instructions">
          <strong>Instructions:</strong>
          <p>
            {showMore
              ? recipe.instructions.join(' ')
              : `${recipe.instructions.slice(0, 2).join(' ')}...`}
          </p>
          <button onClick={handleReadMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

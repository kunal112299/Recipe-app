import React, { useState } from 'react';
import IngredientPopup from './IngredientPopup';

export default function Cards({ data }) {
  const [selectedIngredients, setSelectedIngredients] = useState(null);

  const handleIngredientsClick = (ingredients) => {
    setSelectedIngredients(ingredients);
  };

  const handleClosePopup = () => {
    setSelectedIngredients(null);
  };

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center py-10 px-10'>
      {data.map((recipe, idx) => (
        <div key={idx} className='w-[250px] border shadow-[0px_3px_6px_0px_#aaa] h-[350px]'>
          <div className="m-2">
            <img 
              src={recipe.recipe.images.SMALL.url} 
              alt={recipe.recipe.label} 
              className='w-[100%] h-[150px] object-cover' 
            />
            <h2 className='text-xl font-bold'>{recipe.recipe.label}</h2>
          </div>
          <div className='flex flex-col'>
            <button 
              type="button" 
              className='p-2 m-2 border border-green-400 font-semibold text-green-400'
              onClick={() => handleIngredientsClick(recipe.recipe.ingredients)}
            >
              Ingredients
            </button>
            <button 
              type="button" 
              className='p-2 m-2 border border-red-400 font-semibold text-red-400'
              onClick={() => window.open(recipe.recipe.url, '_blank')}
            >
              See Complete Recipe
            </button>
          </div>
        </div>
      ))}

      {selectedIngredients && (
        <IngredientPopup
          ingredients={selectedIngredients}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

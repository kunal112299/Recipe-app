import React from 'react';

function IngredientPopup({ ingredients, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5">
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient.text}</li>
          ))}
        </ul>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default IngredientPopup;

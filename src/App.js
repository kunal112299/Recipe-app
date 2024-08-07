
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import React, {useState} from 'react';

function App() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([])

  const handleChange = (e)=>{
    setSearch(e.target.value);
  }

  const getRecipe = async (search) => {
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=b0de7667&app_key=%20df610ddbfe6f4b001b33b22e982ab0a5`)
      const apiData = await res.json()
      if(!res.ok) {
        throw new Error('err in fetching');
      }
      setData(apiData.hits);
      console.log('DATA\n', apiData)
    } catch (error) {
      console.log(error); 
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    getRecipe(search)
  };
  
  
  return (
    <div>
      <Header search={search} handleChange={handleChange}  onSubmit={onSubmit}/>
      <Cards data={data}/>
    </div>
  );
}

export default App;

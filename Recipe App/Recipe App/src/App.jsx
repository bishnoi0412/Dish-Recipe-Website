import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Prodect from './componets/Prodect'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Prodectdeteails from './componets/Prodectdeteails';
import Erorr from './componets/Erorr';
function App() {
  const [data, Setdata] = useState([]);
  const[search,Setsearch]=useState("");
  // console.log(search);

  const useCalldata = useCallback(()=>{
    async function apicall(){
      const res =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.toLocaleLowerCase()|| "cake"}`)
      const respon = await res.json();
      // console.log(respon);
      Setdata(respon.meals);
    }
    apicall();
  },[Setdata, search])

  useEffect(()=>{
    // apicall();
    useCalldata();
  },[search])

  const error = "Data not MAt";
  return (
    <>
      <a href='/' className='text-4xl block cursor-pointer text-white py-4 px-2 bg-slate-900 font-bold text-center'> Dish Recipe App</a>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={!data ? <Erorr/> : <Prodect datas={data} Setsearch={Setsearch} search={search}/>}/>
          <Route path='/Prodectdeteails/:idMeal' element={  <Prodectdeteails/>}/>
        </Routes>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App

import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Prodectdeteails = () => {
  const { idMeal } = useParams();
  const [detalfod, Setdetalfod] = useState([]);

  async function ditals() {
    const respon = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );

    const pagedata = await respon.json();
    // console.log(pagedata.meals[0]);
    Setdetalfod(pagedata.meals[0]);
  }
  useEffect(() => {
    ditals();
  }, []);

  return (
    <>
      <section className="w-full sm:h-[500px] h-full  mt-5">
        <div className="w-[100%] h-full sm:flex items-center">
          <div className="container sm:w-[1342px] h-full mx-auto sm:flex gap-4 bord">
            <div className="img sm:w-[25%] md:w-[35%] sm:h-[400px] py-2 px-4">
              <img
                src={detalfod.strMealThumb}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="data-container w-full sm:h-[400px] sm:w-[75%] md:w-[65%]  flex flex-col justify-center">
              <div className="py-4 px-4">
                <p>{detalfod.strInstructions}</p>
              </div>
              <div className="px-4 flex gap-4 items-center mb-2">
                <NavLink to={'/'} className="py-2 w-1/2 sm:w-auto text-[16px] px-4 bg-[#ff8800] rounded-md cursor-pointer font-semibold hover:bg-[#cc6402] text-white">
                  {detalfod.strCategory}
                </NavLink>
                <NavLink to={'/'} className="py-2 px-4 w-1/2 sm:w-auto text-[16px] bg-[#fa0c05] rounded-md cursor-pointer text-white font-semibold hover:bg-[#d30802]">
                  {detalfod.strMeal}
                </NavLink>
              </div>
            </div>
            {/* data end here */}
          </div>

          {/* container end here */}
        </div>
        {/* main div end here */}
      </section>
      {/* main end section end here */}
    </>
  );
};

export default Prodectdeteails;

import React from "react";
import {NavLink} from "react-router-dom";

const Prodect = ({ datas,Setsearch }) => {
  return (
    <>
      <section className="mt-5 w-full">
        <div className="formData flex justify-center items-center px-4 sm:px-0">
          <input
            type="text"
            placeholder="Enter Your Dies"
            autoFocus
            className="outline-none border px-2 py-1 rounded-md w-[400px] shadow-md"
            onChange={(e)=>{
                Setsearch(e.target.value)
            }}
          />
        </div>
        <div className="main-data max-w-[1340px] mx-auto  mt-5 px-2">
          <div className="row-data mt-5  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-2 h-full">
            {datas.map((ele) => {
                // console.log(ele);
              return (
                <span key={ele.idMeal}>
                  <div className="card w-full  sm:m-0 border  rounded-md shadow-md hover:scale-105 duration-300">
                    <div className="w-full h-[200px] mt-2">
                      <img
                        src={ele.strMealThumb}
                        className="w-full px-2 cursor-pointer h-full"
                        alt=""
                      />
                    </div>
                    <div className="px-2 ">
                      <h1 className="bg-slate-900 text-white py-2  text-center font-semibold ">
                       {ele.strMeal}
                      </h1>
                      <p className="text-sm p-2">
                        {ele.strInstructions.slice(0,50)}
                      </p>
                    </div>
                    <NavLink to={`/Prodectdeteails/${ele.idMeal}`} className="px-2 py-2 mb-2 flex justify-center item-center">
                      <button className="py-2 px-6 font-semibold w-[60%] bg-[#ff8800] hover:bg-[#cc6402] text-white rounded-xl text-sm">
                        Recipe
                      </button>
                    </NavLink>
                  </div>
                  {/* card end here */}
                </span>
              );
            })}
          </div>
          {/* row data end here */}
        </div>
        {/* main-data end here */}
      </section>
    </>
  );
};

export default Prodect;

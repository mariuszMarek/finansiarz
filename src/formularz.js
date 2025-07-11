// import { useSearchParams } from "react-router";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

function Formularz({ dodajWpis }) {
  const { nazwaFormularza } = useParams();
  const [daneZFormularza, setDaneZFormularza] = useState({});

  const przyWpisywaniu = (wydarzenie) => {
    const nazwaPola = wydarzenie.target.name;
    const wartoscPola = wydarzenie.target.value;

    setDaneZFormularza((poprzedniWpis) => ({
      ...poprzedniWpis,
      [nazwaPola]: wartoscPola,
    }));
  };

  const przyDodaniu = (wydarzenie) => {
    wydarzenie.preventDefault();
    console.log(daneZFormularza);
    dodajWpis(nazwaFormularza, { ...daneZFormularza });
  };
  //   console.log(nazwaFormularza)
  if (nazwaFormularza == "wydatek") {
    return (
      <div className="max-w-5xl m-mx-auto bg-white rounded-lg shadow-2xl">
        <h2 className="text-center text-red-800 text-2xl p-6 font-bold capitalize">
          {nazwaFormularza}
        </h2>
        {/* <div className="border-t-2 border-black ml-6 mr-6"></div> */}
        <form
          id={nazwaFormularza}
          onSubmit={przyDodaniu}
          className="grid grid-cols-2 border-spacing-2 p-6 space-y-2"
        >
          <label className="font-bold">Typ</label>
          <select
            value={daneZFormularza.typ}
            onChange={przyWpisywaniu}
            className="border-b"
          >
            <option value="Miesięczne">Stałe</option>
            <option value="Dzienne">Dzienne</option>
            <option value="Niespodziewane">Niespodziewane</option>
          </select>

          {/* <div className="col-span-2 border-t-2 border-gray-400 mt-2 mb-4"></div> */}

          <label className="font-bold">test 2</label>
          <input
            type="text"
            value={daneZFormularza.text}
            onChange={przyWpisywaniu}
            className="border-b"
          >            
          </input>
        </form>
      </div>
    );
  }
}
export default Formularz;

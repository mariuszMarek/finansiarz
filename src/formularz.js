// import { useSearchParams } from "react-router";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Formularz({ dodajWpis }) {
  const { nazwaFormularza } = useParams();
  const [daneZFormularza, setDaneZFormularza] = useState({});
  const [statusFormularza, setStatusFormularza] = useState(false);

  const walidujWpisyFormularza = () => {
    const wszystkieWypelnione = Object.values(daneZFormularza).every(
      (wartoscPola) => wartoscPola.toString().trim() !== ""
    );
    setStatusFormularza(wszystkieWypelnione);
  };
  useEffect(()=>{
    walidujWpisyFormularza()
  }, [daneZFormularza])

  const przyWpisywaniu = (wydarzenie) => {
    const nazwaPola = wydarzenie.target.name;
    const wartoscPola = wydarzenie.target.value;

    // console.log(nazwaPola)
    // console.log(wartoscPola)

    setDaneZFormularza((poprzedniWpis) => ({
      ...poprzedniWpis,
      [nazwaPola]: wartoscPola,
    }));
  };

  const przyDodaniu = (wydarzenie) => {
    wydarzenie.preventDefault();
    dodajWpis(nazwaFormularza, { ...daneZFormularza });
    setDaneZFormularza({});
  };
  if (nazwaFormularza == "wydatek") {
    return (
      <div className="max-w-5xl m-mx-auto bg-white rounded-lg shadow-2xl">
        <h2 className="text-center text-red-800 text-2xl p-6 font-bold capitalize">
          {nazwaFormularza}
        </h2>
        <form
          id={nazwaFormularza}
          onSubmit={przyDodaniu}
          className="grid grid-cols-2 border-spacing-2 p-6 space-y-2"
        >
          <label className="font-bold">Typ</label>
          <select
            name="typWydatku"
            value={daneZFormularza.typWydatku || ""}
            onChange={przyWpisywaniu}
            className="border-b pl-0"
          >
            <option value="" disabled>
              Wybierz typ
            </option>
            <option value="Miesięczne">Stałe</option>
            <option value="Dzienne">Dzienne</option>
            <option value="Niespodziewane">Niespodziewane</option>
          </select>

          <label className="font-bold">Nazwa wydatku</label>
          <input
            type="text"
            name="nazwaWydatku"
            value={daneZFormularza.nazwaWydatku || ""}
            onChange={przyWpisywaniu}
            className="border-b pl-1"
            placeholder="Podaj nazwę wydatku"
          />

          <label className="font-bold">Kwota wydatku w PLN</label>
          <input
            type="number"
            step="0.01"
            min="0.00"
            name="kwotaWydatku"
            value={daneZFormularza.kwotaWydatku || ""}
            onChange={przyWpisywaniu}
            className="border-b pl-1"
            placeholder="Podaj kwotę wydatku"
          />
          <div className="col-span-2 flex justify-end mt-6">
            <button
            disabled={!statusFormularza}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Dodaj wydatek
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Formularz;

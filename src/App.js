import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AktualnyMiesiac from "./AktualnyMiesiac.js";
import Formularz from "./formularz.js";

function App() {
  // Dane z miesiącami
  const ostatnieMiesiace = {
    "2025.07.10-2025.08.09": "lipiec",
    "2025.08.10-2025.09.09": "sierpień",
    "2025.09.10-2025.10.09": "wrzesień",
  };

  return (
    <BrowserRouter>
      <div className="grid grid-rows-[auto,1fr] h-screen bg-gray-100 font-sans">
        <header className="bg-green-900 text-white p-4 shadow-md">
          <h1 className="text-xl font-bold">
            <Link to="/">Budżet domowy - v0.0.2</Link>
          </h1>
        </header>
        <div className="flex flex-1 overflow-y-hidden">
          <aside className="w-64 bg-blue-500 text-gray-100 p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Menu Główne</h2>
            <hr className="border-black"></hr>
            <p>
              <Link to={`/formularz/wydatek`}>Nowy wydatek</Link>
            </p>
            <p>
              <Link to={"/opcje"}>Opcje</Link>
            </p>
          </aside>
          <main className="flex-1 pt-6 pl-6 pr-6 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <p className="text-center text-gray-500 mt-10">
                    Wybierz miesiąc z panelu po prawej, aby zobaczyć szczegóły.
                  </p>
                }
              />
              <Route
                path="/miesiac/:nazwaMiesiaca"
                element={<AktualnyMiesiac />}
              />
              <Route path="/formularz/:nazwaFormularza" element={<Formularz />}/>
              <Route path="/opcje"/>

            </Routes>
          </main>

          <aside className="w-64 bg-gray-800 text-white p-4 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Ostatnie {Object.keys(ostatnieMiesiace).length} miesiące
            </h2>
            <nav>
              <ul>
                {Object.keys(ostatnieMiesiace).map((klucz) => (
                  <li key={klucz} className="mb-2">
                    <Link
                      to={`/miesiac/${ostatnieMiesiace[klucz]}?zakres=${klucz}`}
                      className="block py-1 px-2 rounded transition-colors duration-200 hover:bg-gray-700 hover:text-blue-300 capitalize"
                    >
                      {ostatnieMiesiace[klucz]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

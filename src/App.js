import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AktualnyMiesiac from "./AktualnyMiesiac.js";

function App() {  
  let ostatnieMiesiace = {
    "2025.07.10-2025.08.09": "lipiec",
    "2025.08.10-2025.09.09": "sierpień",
    "2025.09.10-2025.10.09": "wrzesień",
  };
  return (
    <BrowserRouter>
      <div className="uklad-aplikacji">
        <header className="uklad-naglowek">
          <h1 className="text-xl font-bold"><Link to="/">Budżet domowy - v0.0.2</Link></h1>
        </header>
        <div className="uklad-glowny-kontener">
          <aside className="uklad-panel-boczny-prawy">
            <h2 className="text-2xl font-bold mb-2">menu glowne</h2>
            opcje różne
          </aside>

          <main className="uklad-tresc">
            <Routes>
              <Route path="/" element={<p>Wybierz miesiąc z panelu po prawej, aby zobaczyć szczegóły.</p>}/>
              <Route
                path="/miesiac/:nazwaMiesiaca"
                element={<AktualnyMiesiac />}
              />
            </Routes>
          </main>

          <aside className="uklad-panel-boczny">
            <h2 className="text-lg font-semibold mb-4">
              ostatnie {Object.keys(ostatnieMiesiace).length} Miesiące
            </h2>
            <nav>
              <ul>
                {Object.keys(ostatnieMiesiace).map((klucz) => (
                  <li key={klucz} className="mb-2">
                    <Link
                      to={`/miesiac/${ostatnieMiesiace[klucz]}?zakres=${klucz}`}
                      className="hover:text-blue-300"
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

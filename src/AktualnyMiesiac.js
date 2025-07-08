import { useSearchParams } from "react-router";
import { useParams } from "react-router-dom";

function AktualnyMiesiac() {
  const { nazwaMiesiaca } = useParams();
  const [parametryQuery, setParametryQuery] = useSearchParams();
  const zares = parametryQuery.get("zakres");

  return (
    <div className="grid grid-flow-col[auto,1fr] gap-x-2 items-center mb-4">
      
      <p className="text-2xl font-bold">Podsumowanie dla miesiąca:</p>

      
      <span className="text-2xl font-bold capitalize text-blue-600">
        {nazwaMiesiaca}
      </span>

      
      <p>Dokładnie:</p>
      
      <span>{zares}</span>

      <p>
        Tutaj pojawią się szczegółowe dane, wykresy i transakcje dla wybranego
        miesiąca.
      </p>
    </div>
  );
}

export default AktualnyMiesiac;

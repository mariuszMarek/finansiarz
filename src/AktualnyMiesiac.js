import { useSearchParams } from "react-router";
import { useParams } from "react-router-dom";

function AktualnyMiesiac() {
  const { nazwaMiesiaca } = useParams();
  const [parametryQuery, setParametryQuery] = useSearchParams();
  const zares = parametryQuery.get("zakres");

  return (
    <div>
      <div className="grid grid-cols-[auto,1fr] gap-x-4 items-center mb-4">
        <p className="text-2xl font-bold "> Podsumowanie dla miesiąca: </p>

        <span className="text-2xl font-bold capitalize text-blue-600 text-right pr-6">
          {nazwaMiesiaca}
        </span>

        <p className="text-xl pt-2 ">Dokłady przedział czasowy:</p>
        <span className="text-xl pt-2 text-right pr-6">{zares}</span>
      </div>
      <p className="mt-4 ">
        Tutaj pojawią się szczegółowe dane, wykresy i transakcje dla wybranego
        miesiąca.
      </p>
    </div>
  );
}

export default AktualnyMiesiac;

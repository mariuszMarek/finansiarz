import { useParams } from 'react-router-dom';

function AktualnyMiesiac() {
  // Hook useParams odczytuje parametry z URL (np. { nazwaMiesiaca: 'lipiec' })  
  const { nazwaMiesiaca} = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Podsumowanie dla miesiąca: <span className="capitalize text-blue-600">{nazwaMiesiaca}</span>
      </h1>
      <p>Tutaj pojawią się szczegółowe dane, wykresy i transakcje dla wybranego miesiąca.</p>      
    </div>
  );
}

export default AktualnyMiesiac;
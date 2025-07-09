// import { useSearchParams } from "react-router";
import { useParams } from "react-router-dom";
import React, {useState} from "react";

function Formularz(){
    const { nazwaFormularza } = useParams();

    return(
        <div className="">
            tutaj bedzie formularz
        </div>
    )
}
export default Formularz
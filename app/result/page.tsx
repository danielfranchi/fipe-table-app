"use client"

import Title from "@/components/title";
import { Store } from "@/context/apiContext";
import { useContext, useEffect } from "react";

import { ContainerResult, PriceSpan } from "../../styles/styles";

const Result = () => {

    const contextData = useContext(Store);
    
    const title = `Tabela Fipe: Preço ${contextData.searchResult.Marca} ${contextData.searchResult.Modelo} ${contextData.searchResult.AnoModelo}`

    return (
        <ContainerResult>
            <Title title={title} />
            <PriceSpan>{contextData.searchResult.Valor}</PriceSpan>
            <span>Este é o preço de compra do veículo</span>
        </ContainerResult>
    )

}

export default Result
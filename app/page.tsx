"use client";
import { useContext } from "react";

import Caption from "@/components/caption";
import Select from "@/components/select";
import SearchButton from "@/components/button";
import Title from "@/components/title";

import { Store } from "@/context/apiContext";

import { Container, TitleContainer, FormContainer } from "@/styles/styles";

const Home = () => {
  const contextData = useContext(Store);

  return (
    <Container>
      <TitleContainer>
        <Title title="Tabela Fipe" />
        <Caption text="Consulte o valor de um veículo de forma gratuita " />
      </TitleContainer>

      <FormContainer>
        <Select id="brand" label="Marca" data={contextData.getBrands} />

        <Select
          id="model"
          label="Modelo"
          data={contextData.getModels.modelos}
          disabled={
            contextData.brandCode && contextData.brandCode.codigo !== ""
              ? false
              : true
          }
        />

        {contextData.getYears && contextData.getYears.length > 0 && (
          <Select id="year" label="Ano" data={contextData.getYears} />
        )}

        <SearchButton
          label="Consultar preço"
          href="/result"
          disabled={
            contextData.yearsCode.codigo !== "" &&
            contextData.yearsCode.nome !== ""
              ? false
              : true
          }
        />
      </FormContainer>
    </Container>
  );
};

export default Home;

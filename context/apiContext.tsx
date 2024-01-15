"use client";

import React, { useState, createContext, useEffect } from "react";

import getAllBrands from "@/app/api/getAllBrands";
import getAllModels from "@/app/api/getAllModels";
import getAllYear from "@/app/api/getAllYear";
import getValue from "@/app/api/getValue";

import { Brand, DataBrands } from "../types/brands";
import { Model, DataModel } from "../types/models";
import { DataYear, Year } from "@/types/year";
import { Value } from "@/types/value";

interface ContextProps {
  getBrands: DataBrands[];
  setGetBrands: (data: DataBrands[]) => void;
  brandCode: Brand;
  setBrandCode: (brandCode: Brand) => void;
  getModels: DataModel;
  setGetModels: (dataBrand: DataModel) => void;
  modelCode: Brand;
  setModelCode: (ModelCode: Brand) => void;
  getYears: DataYear;
  setGetYears: (data: DataYear) => void;
  yearsCode: Year;
  setYearsCode: (yearsCode: Year) => void;
  searchResult: Value;
  setSearchResult: (searchResult: Value) => void;
}

const initialValue: ContextProps = {
  getBrands: [],
  setGetBrands: () => {},
  brandCode: { codigo: "", nome: "" },
  setBrandCode: () => {},
  getModels: { anos: [], modelos: [] },
  setGetModels: () => {},
  modelCode: { codigo: "", nome: "" },
  setModelCode: () => {},
  getYears: [],
  setGetYears: () => {},
  yearsCode: { codigo: "", nome: "" },
  setYearsCode: () => {},
  searchResult: { Marca: "", Modelo: "", Valor: "", AnoModelo: 0 },
  setSearchResult: () => {},
};

type ProviderProps = {
  children: React.ReactNode;
};

export const Store = createContext<ContextProps>(initialValue);

export const Storage = ({ children }: ProviderProps) => {
  const [getBrands, setGetBrands] = useState<DataBrands[]>(
    initialValue.getBrands
  );
  const [brandCode, setBrandCode] = useState<Brand>(initialValue.brandCode);
  const [modelCode, setModelCode] = useState<Brand>(initialValue.modelCode);
  const [getModels, setGetModels] = useState<DataModel>(initialValue.getModels);
  const [getYears, setGetYears] = useState<DataYear>(initialValue.getYears);
  const [yearsCode, setYearsCode] = useState<Year>(initialValue.yearsCode);
  const [searchResult, setSearchResult] = useState<Value>(
    initialValue.searchResult
  );

  useEffect(() => {
    (async () => {
      const response = await getAllBrands();
      setGetBrands(response);
    })();
  }, []);

  useEffect(() => {
    setGetModels({ anos: [], modelos: [] });
    setModelCode({ codigo: "", nome: "" });
    setGetYears([]);

    brandCode &&
      brandCode.codigo !== "" &&
      (async () => {
        const response = await getAllModels(brandCode.codigo);
        setGetModels(response);
      })();

    brandCode.codigo === "" &&
      brandCode.nome === "" &&
      setModelCode({ codigo: "", nome: "" });
  }, [brandCode]);

  useEffect(() => {
    setYearsCode({ codigo: "", nome: "" });
    setGetYears([]);

    modelCode &&
      modelCode.codigo !== "" &&
      (async () => {
        const response = await getAllYear(brandCode.codigo, modelCode.codigo);

        const yearsData = response.map((item) => ({
          ...item,
          nome: item.nome.split(" ")[0],
        }));

        setGetYears(yearsData);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelCode]);

  useEffect(() => {
    yearsCode.codigo !== "" &&
      (async () => {
        const response = await getValue(
          brandCode.codigo,
          modelCode.codigo,
          yearsCode.codigo
        );

        setSearchResult(response);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearsCode]);

  return (
    <Store.Provider
      value={{
        getBrands,
        setGetBrands,
        brandCode,
        setBrandCode,
        getModels,
        setGetModels,
        modelCode,
        setModelCode,
        getYears,
        setGetYears,
        yearsCode,
        setYearsCode,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </Store.Provider>
  );
};

import { useContext, useEffect, useState } from "react";

import { Store } from "@/context/apiContext";

import { SelectProps, DataObject } from "@/types/select";
import { Model } from "@/types/models";
import { Brand } from "@/types/brands";
import { Year } from "@/types/year";

import { TextField } from "@mui/material";
import { MyStyledAutocomplete } from "@/styles/myStyledAutocomplete";

const Select = ({ id, label, data, disabled }: SelectProps) => {
  const contextData = useContext(Store);

  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);

  useEffect(() => {
    if (id === "brand") {
      selectedBrand !== null
        ? contextData.setBrandCode(selectedBrand)
        : contextData.setBrandCode({ codigo: "", nome: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  useEffect(() => {
    if (id === "model") {
      selectedModel !== null
        ? contextData.setModelCode(selectedModel)
        : contextData.setModelCode({ codigo: "", nome: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel]);

  useEffect(() => {
    selectedYear !== null
      ? contextData.setYearsCode(selectedYear)
      : contextData.setYearsCode({ codigo: "", nome: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  useEffect(() => {
    if (disabled) {
      if (id === "brand") {
        setSelectedBrand(null);
      } else if (id === "model") {
        setSelectedModel(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  useEffect(() => {
    setSelectedModel({ codigo: "", nome: "" });
  }, [contextData.brandCode]);

  useEffect(() => {
    setSelectedYear(null);
  }, [contextData.modelCode]);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: DataObject | null
  ) => {
    if (id === "brand") {
      setSelectedBrand(newValue);
    } else if (id === "model") {
      setSelectedModel(newValue);
    } else {
      setSelectedYear(newValue);
    }
  };

  return (
    <MyStyledAutocomplete
      disablePortal
      id={id}
      options={data}
      getOptionLabel={(option) => option.nome}
      value={
        id === "brand"
          ? selectedBrand
          : id === "model"
          ? selectedModel
          : id === "year"
          ? selectedYear
          : null
      }
      clearOnBlur={false}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputLabelProps={{
            style: { color: "#8d909b" },
          }}
        />
      )}
      onChange={handleChange}
    />
  );
};

export default Select;

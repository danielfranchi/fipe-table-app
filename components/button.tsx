"use client";

import { useRouter } from "next/navigation";

import { SearchButtonProps } from "@/types/button";

import { MyStyledButton } from "@/styles/myStyledButton";

const SearchButton = ({ label, href, disabled }: SearchButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <MyStyledButton
      variant="contained"
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </MyStyledButton>
  );
};

export default SearchButton;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f6fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  & > * {
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.div`
  width: 33rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  padding-top: 3rem;
  padding-bottom: 3rem;

  & > * {
    margin-bottom: 1rem;
  }

  & > select:last-of-type {
    margin-bottom: 30rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const ContainerResult = styled.div`
  width: 100%;
  height: 400px;
  background-color: #dcf5f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:first-child {
    margin-bottom: 2rem;
  }

  & > *:nth-child(2) {
    margin-bottom: 2rem;
  }
`;

export const PriceSpan = styled.span`
  width: 159px;
  height: 50px;
  background-color: #00a38c;
  color: #fff;
  border-radius: 30px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

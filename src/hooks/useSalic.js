import { useState } from "react";
import axios from "axios";

const useSalic = () => {
  //Inicialização de variáveis e states:
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState();

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const response = await axios(
        "http://api.salic.cultura.gov.br/v1/projetos/?limit=60&offset=1&format=json"
      );
      console.log(response);
      setIsLoading(false);
      const data = response.data._embedded.projetos.map((item) => {
        return {
          title: item.nome,
          city: item.municipio,
          state: item.UF,
          summary: item.resumo,
          status: item.situacao,
          approvedValue: item.valor_aprovado.toFixed(2),
          raisedValue: item.valor_captado.toFixed(2),
        };
      });
      setResponseData(data);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
      console.log("Ocorreu um erro: ", error);
    }
  };

  return {
    sendRequest,
    errorMessage,
    responseData,
    isLoading,
  };
};

export default useSalic;

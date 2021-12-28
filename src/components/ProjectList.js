import { useEffect } from "react";

import ProjectItem from "./ProjectItem";
import useSalic from "../hooks/useSalic";
import Carousel from "react-elastic-carousel";
import styles from "./ProjectList.module.scss";

const ProjectList = (props) => {
  const { sendRequest, errorMessage, responseData, isLoading } = useSalic();

  useEffect(() => {
    sendRequest();
  }, []);

  const list = responseData ? (
    responseData.map((item, index) => {
      return <ProjectItem key={index} data={item} />;
    })
  ) : (
    <div>Loading...</div>
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 800, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1300, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1600, itemsToShow: 4, itemsToScroll: 4 },
  ];

  return (
    <>
      {isLoading && <div className={styles.loadingSpinner} />}
      {errorMessage && (
        <h2>
          Erro ao acessar o servidor. Por favor, Tente novamente mais tarde.
        </h2>
      )}
      {!errorMessage && !isLoading && (
        <Carousel
          className="container"
          enableTilt={false}
          itemPadding={[10, 10, 10, 10]}
          breakPoints={breakPoints}
        >
          {list}
        </Carousel>
      )}
    </>
  );
};

export default ProjectList;

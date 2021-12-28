import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./App.module.scss";
import ProjectList from "./components/ProjectList";

library.add(faHeart, faChevronRight, faChevronLeft);

function App() {
  return (
    <div className={styles.appContainer}>
      <ProjectList />
    </div>
  );
}

export default App;

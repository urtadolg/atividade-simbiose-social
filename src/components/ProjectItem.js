import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProjectItem.module.scss";

const ProjectItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.lawFlag}>ROUANET</div>
      <h1 className={styles.title}>{props.data.title}</h1>
      <p className={styles.city}>{`${props.data.city}, ${props.data.state}`}</p>
      <p className={styles.description}>{props.data.summary}</p>
      <div className={styles.situationContainer}>
        <p className={styles.situation}>{props.data.status}</p>
        <span className={styles.value}>{`R$ ${props.data.approvedValue}`}</span>
      </div>
      <div className={styles.situationContainer}>
        <p className={styles.situation}>Captado</p>
        <span className={styles.value}>{`R$ ${props.data.raisedValue}`}</span>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnAdd}>ADICIONAR</button>
        <FontAwesomeIcon className={styles.heartIcon} icon={["far", "heart"]} />
      </div>
    </div>
  );
};

export default ProjectItem;

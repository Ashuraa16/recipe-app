import styles from "../Styles/card.module.css";
const Card = ({ food }) => {
  return (
    <div className={styles.outerCard}>
      <div className={styles.card}>
        <div>
          <img className={styles.img} src={food.image} alt={food.title} />
        </div>
        <div>
          <a href="props.url">
            <h2>{food.label}</h2>
          </a>
          <a href={food.url}>
            <button className={styles.btn}>See More...</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

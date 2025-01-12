import styles from "./Netflix.module.css";

export const SeriesCard = ({ currEle }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    currEle;

  const checkColor = (rating) => {
    if (rating > 9) return "lightgreen";
    else if (rating > 8.5) return "yellow";
    else return "red";
  };
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="100%" />
      </div>
      <div className={styles["text-content"]}>
        <h2>Name : {name} </h2>
        <h3>
          Rating: <span style={{backgroundColor: checkColor(rating), //INLINE CSS
            borderRadius:"13px",textAlign:"center",padding:"8px"
          }}>{rating}</span>
        </h3>
        <p>Summary : {description} </p>
        <p>Genre : {genre.join(" , ")} </p>
        <p>Cast : {cast.join(" , ")} </p>
        <a href={watch_url} target="_blank">
          <button className="btn">Watch Now</button>
        </a>
      </div>
    </li>
  );
};

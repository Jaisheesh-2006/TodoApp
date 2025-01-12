import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import styles from "./Netflix.module.css";

const NetflixSeries = () => {
  return (
    <>
    {/* <div>
    </div>
    <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" alt=""  width="50px"/> */}
    <h1 className="heading">List of Netflix Series</h1>
    <ul className={styles.container} >
      {seriesData.map((currEle) => {
        return (
          <SeriesCard key={currEle.id} currEle={currEle} >
            <p>Hello baccho</p>
            </SeriesCard>
        );
      })}
    </ul>
    </>
    
  );
};
export default NetflixSeries;

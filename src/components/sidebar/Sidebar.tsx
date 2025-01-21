import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div className={styles.filters}>
        <button>All</button>
        <button>UI</button>
        <button>UX</button>
        <button>Enhancement</button>
        <button>Bug</button>
        <button>Feature</button>
      </div>

      <div className={styles.roadmap} onClick={() => navigate("/roadmap")}>
        <h2>Roadmap</h2>
        <ul>
          <li>
            <div className={styles.inner_flex}>
              <div className={styles.dot}></div>
              <span className={styles.roadmap_name}>Planned</span>
            </div>
            <span className={styles.roadmap_count}>2</span>
          </li>
          <li>
            <div className={styles.inner_flex}>
              <div className={styles.dot}></div>
              <span className={styles.roadmap_name}>In-Progress</span>
            </div>
            <span className={styles.roadmap_count}>2</span>
          </li>
          <li>
            <div className={styles.inner_flex}>
              <div className={styles.dot}></div>
              <span className={styles.roadmap_name}>Live</span>
            </div>
            <span className={styles.roadmap_count}>2</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

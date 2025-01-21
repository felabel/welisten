import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import BulbIcon from "../../assets/icons/BulbIcon";
import styles from "./Header.module.scss";
import { FeedBackBtn, GoBackBtn } from "../shared/FeedBackBtn";

type Props = {
  hasIcon?: boolean;
  title?: string;
  hasBackBtn?: boolean;
  isHome?: boolean;
};
const Header = ({
  hasIcon = true,
  title = "6 Suggestions",
  hasBackBtn,
  isHome = true,
}: Props) => {
  const [overviewFilter, setOverviewFilter] = useState("most-upvotes");
  return (
    <div className={styles.header}>
      <div className={styles.suggestions}>
        {hasIcon && (
          <div className={styles.icon}>
            <BulbIcon />
          </div>
        )}
        <div>
          {hasBackBtn && <GoBackBtn />}

          <h2>{title}</h2>
        </div>
        {isHome && (
          <>
            <span className={styles.span}>Sort by:</span>
            <Select
              value={overviewFilter}
              onChange={(e) => {
                setOverviewFilter(e.target.value);
              }}
              className={styles.my_select}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="most-upvotes">Most Upvotes</MenuItem>
              <MenuItem value="least-Upvotes">Least Upvotes</MenuItem>
              <MenuItem value="most-comments">Most Comments</MenuItem>
              <MenuItem value="least-comments">Least Comments</MenuItem>
            </Select>
          </>
        )}
      </div>
      <FeedBackBtn text="+ Add Feedback" />
    </div>
  );
};

export default Header;

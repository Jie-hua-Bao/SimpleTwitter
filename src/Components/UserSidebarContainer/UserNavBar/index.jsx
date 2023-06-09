import styles from "./UserNavBar.module.scss";
import NavBarItem from "./NavBarItem";
import LogoutButton from "./LogoutButton";
import TweetButtonSideBar from "./TweetButtonSideBar";
import { NavLink } from "react-router-dom";

//Component
import { ReactComponent as AcLogo } from "../../../assets/icons/AcLogo.svg";
import { ReactComponent as House } from "../../../assets/icons/house.svg";
import { ReactComponent as HouseActive } from "../../../assets/icons/house_Full.svg";
import { ReactComponent as Head } from "../../../assets/icons/head.svg";
import { ReactComponent as HeadActive } from "../../../assets/icons/head_Full.svg";
import { ReactComponent as Gear } from "../../../assets/icons/gear.svg";
import { ReactComponent as GearActive } from "../../../assets/icons/gear_Full.svg";

function UserNavBar() {
  return (
    <div className={styles["container"]}>
      <AcLogo className={styles["navbar-logo"]} />
      <NavBarItem>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            [
              `${styles["navbar-link"]}`,
              isActive ? `${styles["router-link-active"]}` : ``,
            ].join(" ")
          }
          end
        >
          <House className={styles["navbar-link__logo"]} />
          <HouseActive className={styles["navbar-link__logo-active"]} />
        </NavLink>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            [
              `${styles["navbar-link"]}`,
              isActive ? `${styles["router-link-active"]}` : ``,
            ].join(" ")
          }
          end
        >
          {" "}
          <p className={styles["navbar-link__title"]}>首頁</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink
          to={"/user/:username"}
          className={({ isActive }) =>
            [
              `${styles["navbar-link"]}`,
              isActive ? `${styles["router-link-active"]}` : ``,
            ].join(" ")
          }
        >
          <Head className={styles["navbar-link__logo"]} />
          <HeadActive className={styles["navbar-link__logo-active"]} />
          <p className={styles["navbar-link__title"]}>個人資料</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink
          to={"/setting"}
          className={styles["navbar-link"]
          }
          end
        >
          <Gear className={styles["navbar-link__logo"]} />
          <GearActive className={styles["navbar-link__logo-active"]} />
        </NavLink>
        <NavLink
          to={"/setting"}
          className={({ isActive }) =>
            [
              `${styles["navbar-link"]}`,
              isActive ? `${styles["router-link-active"]}` : ``,
            ].join(" ")
          }
          end
        >
          <p className={styles["navbar-link__title"]}>設定</p>
        </NavLink>
      </NavBarItem>
      <TweetButtonSideBar>推文</TweetButtonSideBar>
      <div className={styles["logout-btn"]}>
        <LogoutButton />
      </div>
    </div>
  );
}

export default UserNavBar;

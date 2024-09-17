import React from "react";
import styles from "./SkillBar.module.css";

export const SkillBar = ({ skillName, skillLevel }) => {
  const levelPercentage = `${skillLevel}%`;

  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillName}>{skillName}</div>
      <div className={styles.skillBarBackground}>
        <div
          className={styles.skillBarFill}
          style={{ width: levelPercentage }}
        ></div>
      </div>
    </div>
  );
};


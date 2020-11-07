import React from "react";

import styles from "./file.module.css";

function file({ data, setSelectedFolder, selectedFolder }) {
  const handleClick = () => {
    setSelectedFolder(data);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.container} ${
        selectedFolder === data && styles.active
      }`}
    >
      <div className={styles.image}>
        <img
          alt="file"
          src="https://img.icons8.com/ios-filled/100/000000/doc.png"
        />
      </div>
      <div className={styles.name}>{data.name}</div>
    </div>
  );
}

export default file;

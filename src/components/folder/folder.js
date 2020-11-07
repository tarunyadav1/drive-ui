import React, { useState } from "react";

import styles from "./folder.module.css";

function Folder({
  data,
  setSelectedFolder,
  selectedFolder,
  setData,
  setNavigation,
  navigation,
}) {
  const handleClick = () => {
    setSelectedFolder(data);
  };

  const handleDoubleClick = () => {
    setData(data.child);
    setNavigation([...navigation, selectedFolder.name]);
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={`${styles.container} ${
        selectedFolder === data && styles.active
      }`}
    >
      <div className={styles.image}>
        <img src="https://img.icons8.com/fluent-systems-filled/48/000000/folder-invoices.png" />
      </div>
      <div className={styles.name}>{data.name}</div>
    </div>
  );
}

export default Folder;

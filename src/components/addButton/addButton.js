import React, { useState } from "react";

import styles from "./addButton.module.css";

function AddButton({ setModal, modal, setSelectedType, setSelectedFolder }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const AddFile = () => {
    setSelectedFolder({});
    setModal(true);
    setSelectedType("file");
  };

  const AddFolder = () => {
    setSelectedFolder({});
    setModal(true);
    setSelectedType("folder");
  };

  return (
    <>
      <div onClick={toggle} className={styles.container}>
        <div className={styles.image}>
          <img alt="plus" src="https://img.icons8.com/nolan/96/plus-math.png" />
        </div>
        <div className={styles.text}>New</div>
      </div>

      {dropdownOpen && (
        <div className={styles.container2}>
          <div onClick={AddFolder} className={styles.folder}>
            Folder
          </div>

          <div onClick={AddFile} className={styles.file}>
            File upload
          </div>
        </div>
      )}
    </>
  );
}

export default AddButton;

import React, { useState, useEffect } from "react";
import { Card, Button, CardTitle, CardBody, Input } from "reactstrap";

import styles from "./addFolder.module.css";

function AddFolder({
  setModal,
  modal,
  data,
  setData,
  selectedType,
  selectedFolder,
}) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedFolder.name) {
      setName(selectedFolder.name);
    }
  }, []);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const HandleAdd = () => {
    if (selectedFolder.name) {
      data.map((e) => {
        if (e.name === selectedFolder.name) {
          e.name = name;
        }
        setData(data);
      });
    } else {
      setData([...data, { name: name, type: selectedType, child: [] }]);
    }
    setModal(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Add</CardTitle>
            <Input
              value={name}
              onChange={handleChange}
              type="text"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
            <Button
              onClick={HandleAdd}
              className={styles.button}
              color="primary"
            >
              CREATE
            </Button>
            <Button onClick={toggle} className={styles.button} color="link">
              CANCEL
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AddFolder;

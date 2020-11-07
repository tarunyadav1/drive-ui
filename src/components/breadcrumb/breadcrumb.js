import React, { useState } from "react";
import { Breadcrumb, Container, Row, Col } from "reactstrap";
import Navigation from "./nav";

import styles from "./breadcrumb.module.css";

function breadcrumb({
  selectedFolder,
  data,
  setData,
  setModal,
  setNavigation,
  navigation,
  sampledata,
  allData,
}) {
  const handleDelete = () => {
    setData(
      data.filter((e) => {
        return selectedFolder !== e;
      })
    );
  };

  const handleRename = () => {
    setModal(true);
  };
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs="9">
            <Breadcrumb>
              <Navigation
                sampledata={sampledata}
                setNavigation={setNavigation}
                navigation={navigation}
                setData={setData}
                data={data}
                allData={allData}
              />
            </Breadcrumb>
          </Col>
          <Col xs="3">
            {selectedFolder.name && (
              <div className={styles.editContainer}>
                <div onClick={handleDelete}>
                  <img src="https://img.icons8.com/ios-filled/50/000000/delete-forever.png" />
                </div>
                <div onClick={handleRename}>
                  <img src="https://img.icons8.com/fluent-systems-filled/48/000000/edit-file.png" />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default breadcrumb;

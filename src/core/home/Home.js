import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import File from "../../components/file/file";
import Folder from "../../components/folder/folder";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import AddButton from "../../components/addButton/addButton";
import AddFolder from "../../components/addFolder/addFolder";

import styles from "./Home.module.css";

let sampledata = [
  {
    name: "Java",
    type: "folder",
    child: [],
  },
  {
    name: "React",
    type: "folder",
    child: [],
  },

  {
    name: "MongoDb",
    type: "folder",
    child: [],
  },
  {
    name: "Nodejs",
    type: "folder",
    child: [],
  },
  {
    name: "JavaScript",
    type: "folder",
    child: [],
  },
  {
    name: "React Native",
    type: "folder",
    child: [],
  },

  {
    name: "notes.pdf",
    type: "file",
    child: [],
  },
];

function Home() {
  const [data, setData] = useState(sampledata);
  const [modal, setModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedFolder, setSelectedFolder] = useState({});
  const [navigation, setNavigation] = useState(["Drive"]);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="2">
            <AddButton
              setSelectedType={setSelectedType}
              modal={modal}
              setModal={setModal}
              setSelectedFolder={setSelectedFolder}
            />
          </Col>

          <Col xs="10">
            <Breadcrumb
              navigation={navigation}
              setNavigation={setNavigation}
              setData={setData}
              data={data}
              selectedFolder={selectedFolder}
              setModal={setModal}
              sampledata={sampledata}
            />
            <div className={styles.folderGrid}>
              {data.length ? (
                data.map((e) => {
                  if (e.type === "folder") {
                    return (
                      <Folder
                        navigation={navigation}
                        setNavigation={setNavigation}
                        setData={setData}
                        selectedFolder={selectedFolder}
                        setSelectedFolder={setSelectedFolder}
                        data={e}
                      />
                    );
                  }
                })
              ) : (
                <div>No Files. Click Add button to add file</div>
              )}
            </div>

            <div className={styles.folderGrid}>
              {data.length
                ? data.map((e) => {
                    console.log(e.type);

                    if (e.type === "file") {
                      return (
                        <File
                          selectedFolder={selectedFolder}
                          setSelectedFolder={setSelectedFolder}
                          data={e}
                        />
                      );
                    }
                  })
                : ""}
            </div>

            {modal && (
              <AddFolder
                selectedType={selectedType}
                data={data}
                setData={setData}
                modal={modal}
                setModal={setModal}
                selectedFolder={selectedFolder}
                navigation={navigation}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

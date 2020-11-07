import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Navigation({ setNavigation, navigation, sampledata, setData, data }) {
  const handleNav = (e) => () => {
    if (e === "Drive") {
      setData(sampledata);
      setNavigation(["Drive"]);
    } else {
      setData(data);
    }
  };
  return (
    <div>
      <Breadcrumb>
        {navigation.map((e, i) => {
          if (navigation.length - 1 === i) {
            return <BreadcrumbItem active>{e}</BreadcrumbItem>;
          }
          return (
            <BreadcrumbItem onClick={handleNav(e)}>
              <a href="#">{e}</a>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default Navigation;

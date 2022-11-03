import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { developer, clothers, footer } from "./footer.styles";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Footer = ({ sections }) => (
  <center>
    <developer>
      <span> Produzido por Ricardo Passinho </span>
      <br />
      <span>Foz do Iguaçu - Brazil </span>
      <br />
      <span> 2022 </span>
    </developer>
  </center>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Footer));

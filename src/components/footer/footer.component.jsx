import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./footer.styles.scss";

const Footer = ({ sections }) => (
  <div className="footer">
    <div>
      <center className="clothers">
        {sections.map(({ id, title }) => (
          <a
            href={"/shop/" + title.toLowerCase()}
            className="clothers"
            key={id}
          >
            {" "}
            {title}{" "}
          </a>
        ))}
      </center>
    </div>
    <div className="developer">
      <span> Produzido por Ricardo Passinho </span>
      <br />
      <span>
        Trabalho desenvolvindo como proposta para a conclusão do Programa de
        Pós-Graduação em Tecnologias, Gestão e Sustentabilidade - Nível de
        Mestrado - PPGTGS
      </span>
      <br />
      <span> Brazil - 2022 </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Footer));

import { CardDocs } from "components/cardDocs";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { PopupDemandas } from "components/modais/demandas/demandas";
import React, { useState } from "react";
import { ContainerDocuments } from "./styled";

export const Documents = () => {
  return (
    <>
      <Header />
      <ContainerDocuments>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos disponíveis</span>
            </h1>

            {localStorage.getItem("token_jwt")?.toString() !== "" ? (
              <button className="btn color-secondary border-secondary btn-docs">
                Adicionar documento
              </button>
            ) : (
              <></>
            )}
          </div>
          {/* Remover os objetivos especificos */}
          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
        </div>
      </ContainerDocuments>
      <Footer />
    </>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// Imagens
import employees from "assets/img/employees.png";
import officeBuilding from "assets/img/office-building.png";
import school from "assets/img/school.png";

// Style
import '../assets/css/cadastro.css';
import '../assets/css/index.css';

export const Cadastro = () => {
  return (
    <>
      <nav className="bgcolor-secondary">
        <ul>
          <a href="index.html">
            <li>Home</li>
          </a>
          <li>Estrutura</li>
          <a href="eixo.html">
            <li>Eixo</li>
          </a>
          <a href="./demandas.html">
            <li>Demandas</li>
          </a>
          <li>Ações integradas</li>
          <li>Equipe técnica</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="cadastro">
        <div className="banner">
          <div
            className="img"
            style={{ backgroundImage: "url(img/cadastroBanner.jpg)" }}
          />
          <div className="cover" />
          <div className="content">
            <div
              className="cad-opt container"
              style={{ height: "fit-content", width: "60%", marginRight: "5%" }}
            >
              <h1 className="border-left-secondary color-secondary">
                Qual seu tipo de cadastro?
              </h1>
              <div className="steps">
                <div className="primeiro">
                  <div className="item">
                    <img src={employees} />
                    <h2 className="color-secondary">Representante</h2>
                    <p>
                      Como representante de um dos municípios faça uma conta e
                      crie suas demandas{" "}
                    </p>
                    <button className="btn color-secondary border-secondary">
                      Escolher
                    </button>
                  </div>
                  <div className="item">
                    <img src={officeBuilding} />
                    <h2 className="color-secondary">Empresa</h2>
                    <p>
                      Para empresas que possuem a vontade de ajudar o município,
                      crie sua conta e comece agora.{" "}
                    </p>
                    <button className="btn color-secondary border-secondary">
                      Escolher
                    </button>
                  </div>
                  <div className="item">
                    <img src={school} />
                    <h2 className="color-secondary">Universidade</h2>
                    <p>
                      Para pessoas com grandes ideias que possam contribuir ao
                      bem maior, clique para criar sua conta.{" "}
                    </p>
                    <button className="btn color-secondary border-secondary">
                      Escolher
                    </button>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <button
                  className="btn color-secondary border-secondary"
                  id="btnCadPrev"
                >
                  Anterior
                </button>
                <button className="btn bgcolor-secondary" id="btnCadNext">
                  Proximo
                </button>
              </div>
            </div>
            <div
              className="cad-login container"
              style={{ height: "fit-content", width: "35%" }}
            >
              <h1 className="border-left-secondary color-secondary">
                Ja possui uma conta?
              </h1>
              <form>
                <label htmlFor="loginEmail">Email:</label>
                <input
                  type="text"
                  placeholder="Seu email"
                  name="loginEmail"
                  id="loginEmail"
                />
                <label htmlFor="loginSenha">Senha:</label>
                <input
                  type="password"
                  placeholder="Sua senha"
                  name="loginSenha"
                  id="loginSenha"
                />
                <p id="esqueceuSenha">Esqueceu sua senha?</p>
                <button className="btn bgcolor-secondary">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="col">
          <div
            className="logo"
            style={{ backgroundImage: "url(img/logo.png)" }}
          />
          <p>Todos os direitos reservados</p>
          <p style={{ textAlign: "center" }}>2021 - 2022</p>
        </div>
        <ul className="col">
          <li className="color-secondary">Conteudo</li>
          <li className="color-secondary">Home</li>
          <li className="color-secondary">Estrutura</li>
          <li className="color-secondary">Eixo</li>
          <li className="color-secondary">Ações integradas</li>
        </ul>
        <ul className="col">
          <li className="color-secondary">Sobre</li>
          <li className="color-secondary">Equipe técnica</li>
          <li className="color-secondary">Contato</li>
        </ul>
        <ul className="col">
          <li className="color-secondary">Ação</li>
          <li className="color-secondary">Demandas</li>
        </ul>
      </footer>
    </>
  );
};

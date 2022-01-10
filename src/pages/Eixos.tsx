import React from "react";

// Eixos
import "../assets/css/index.html";
import "../assets/css/eixos.css";

export const Eixos = () => {
  return (
    <>
      <header style={{ backgroundImage: "url(img/bg.jpg)" }}>
        <div
          className="cover"
          style={{ backgroundColor: "rgba(255,255,255,1)" }}
        />
        <div className="inner">
          <div
            className="logo"
            style={{ backgroundImage: "url(img/logo.png)" }}
          />
          <div className="controls">
            <div className="search">
              <input type="text" placeholder="Deseja procurar por algo?" />
              <span className="button bgcolor-secondary">
                <i className="fas fa-search" />
              </span>
            </div>
            <div className="access-list">
              <a href="./cadastro.html">
                <button
                  className="btn bgcolor-secondary"
                  style={{ width: 135 }}
                >
                  Criar Conta{" "}
                  <i className="fas fa-user-plus" style={{ marginLeft: 10 }} />
                </button>
              </a>
              <button
                className="btn border-secondary color-secondary"
                style={{ width: 135 }}
              >
                Fazer login{" "}
                <i className="fas fa-door-open" style={{ marginLeft: 10 }} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className="bgcolor-secondary">
        <ul>
          <a href="./index.html">
            <li>Home</li>
          </a>
          <li>Estrutura</li>
          <a href="./eixo.html">
            <li className="active color-secondary">Eixo</li>
          </a>
          <a href="./demandas.html">
            <li>Demandas</li>
          </a>
          <li>Ações integradas</li>
          <li>Equipe técnica</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="parallax">
        <div className="item paxItem" id="1">
          <div className="title">
            <div className="icon">
              <i className="fas fa-hotel color-secondary" />
            </div>
            <h2 className="color-secondary">Governança Inteligente</h2>
            <h3 className="color-secondary">Eixo 1</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/1.jpg)" }}
          >
            <p className="contentText">
              Implantar governança integrada e inteligente nos municípios nos
              municípios do oeste do Paraná para convergir os esforços e ações
              que resultem na transformação da região oeste e no uso eficiente
              dos recursos. Capacitar, utilizar e implementar a metodologia do
              Paraná Produtivo coordenado pela Secretaria Estadual de
              Planejamento e Projetos Estruturantes, para que as ações de
              desenvolvimento regional estejam articuladas e coordenadas com o
              Governo do Estado do Paraná. Promover a sincronicidade dos seis
              objetivos estratégicos do planejamento 2021-2022 do Programa Oeste
              Desenvolvimento. Promover a implantação efetiva do Programa Novos
              Arranjos Produtivos de Inovação – NAPI, da Fundação Araucária, no
              oeste do Paraná.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="2">
          <div className="title">
            <div className="icon">
              <i className="fas fa-id-card color-secondary" />
            </div>
            <h2 className="color-secondary">Gestão Pública</h2>
            <h3 className="color-secondary">Eixo 2</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/2.jpg)" }}
          >
            <p className="contentText">
              Coordenar ações para modernizar a gestão pública municipal com a
              formação continuada dos servidores públicos, e utilização de
              informações e inteligência artificial para planejamento e tomada
              de decisões dos gestores públicos.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="3">
          <div className="title">
            <div className="icon">
              <i className="fas fa-tree color-secondary" />
            </div>
            <h2 className="color-secondary">Sustentabilidade</h2>
            <h3 className="color-secondary">Eixo 3</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/3.jpg)" }}
          >
            <p className="contentText">
              Promover a sustentabilidade efetiva para o desenvolvimento com
              ações coordenadas visando maior equilíbrio entre as dimensões
              sociais, econômicas e ambientais.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="4">
          <div className="title">
            <div className="icon">
              <i className="fas fa-briefcase color-secondary" />
            </div>
            <h2 className="color-secondary">Negócios e renda</h2>
            <h3 className="color-secondary">Eixo 4</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/4.jpg)" }}
          >
            <p className="contentText">
              a autonomia, o desenvolvimento humano, social e profissional
              visando geração de emprego e renda a partir da ampliação ou
              geração de novos negócios e atração de investimentos buscando
              viabilizar estrutura e a metodologia da Invest Paraná.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="5">
          <div className="title">
            <div className="icon">
              <i className="fas fa-heartbeat color-secondary" />
            </div>
            <h2 className="color-secondary">Saúde</h2>
            <h3 className="color-secondary">Eixo 5</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/5.jpg)" }}
          >
            <p className="contentText">
              Diagnosticar a situação da saúde pública e qualidade de vida da
              população do oeste do Paraná para proposição de ações e políticas
              públicas.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="6">
          <div className="title">
            <div className="icon">
              <i className="fas fa-university color-secondary" />
            </div>
            <h2 className="color-secondary">Papel da universidade </h2>
            <h3 className="color-secondary">Eixo 6</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/6.jpg)" }}
          >
            <p className="contentText">
              Inserir as universidades públicas e particulares na promoção do
              desenvolvimento efetivo dos municípios do oeste do Paraná e na
              indução de competências inovativas e tecnológicas por meio das
              atividades de ensino, pesquisa e extensão.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="7">
          <div className="title">
            <div className="icon">
              <i className="fas fa-seedling color-secondary" />
            </div>
            <h2 className="color-secondary">Agricultura Familiar</h2>
            <h3 className="color-secondary">Eixo 7</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/7.jpg)" }}
          >
            <p className="contentText">
              Desenvolver ações visando a qualidade de vida, uso equilibrado e
              racional dos recursos naturais, e, viabilidade econômica da
              agricultura familiar.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="8">
          <div className="title">
            <div className="icon">
              <i className="fas fa-laptop-code color-secondary" />
            </div>
            <h2 className="color-secondary">Inovação</h2>
            <h3 className="color-secondary">Eixo 8</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/8.jpg)" }}
          >
            <p className="contentText">
              Promover e articular os ecossistemas de inovação e fomentar
              tecnologias visando a competitividade nos arranjos produtivos e
              prospecção de novos negócios.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="9">
          <div className="title">
            <div className="icon">
              <i className="fas fa-drumstick-bite color-secondary" />
            </div>
            <h2 className="color-secondary">Segurança e Competitividade</h2>
            <h3 className="color-secondary">Eixo 9</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/9.jpg)" }}
          >
            <p className="contentText">
              Desenvolver ações para garantir a segurança e a competitividade da
              cadeia produtiva de proteínas animais e vegetal.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="10">
          <div className="title">
            <div className="icon">
              <i className="fas fa-sitemap color-secondary" />
            </div>
            <h2 className="color-secondary">Infraestrutura</h2>
            <h3 className="color-secondary">Eixo 10</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/10.jpg)" }}
          >
            <p className="contentText">
              Diagnosticar, elaborar projetos e encaminhar as demandas de
              infraestrutura da região oeste do Paraná.
            </p>
          </div>
        </div>
        <div className="item paxItem" id="11">
          <div className="title">
            <div className="icon">
              <i className="fas fa-shield-alt color-secondary" />
            </div>
            S<h2 className="color-secondary">Segurança</h2>
            <h3 className="color-secondary">Eixo 11</h3>
          </div>
          <div className="cover" />
          <div
            className="content"
            style={{ backgroundImage: "url(img/eixos/11.jpg)" }}
          >
            <p className="contentText">
              Apoiar e promover a segurança pública na faixa de fronteira.
            </p>
          </div>
        </div>
      </div>
      <button className="btnTopo bgcolor-secondary">
        <i className="fas fa-arrow-up" />
      </button>
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

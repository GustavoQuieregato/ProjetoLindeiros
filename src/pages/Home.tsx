import React from "react";

import "../assets/css/global.css";

export const Home: React.FC = () => {
  return (
    <>
      <header style={{ backgroundImage: "url(img/bg.jpg)" }}>
        <div
          className="cover"
          style={{ backgroundColor: "rgba(255,255,255,1)" }}
        ></div>
        <div className="inner">
          <div
            className="logo"
            style={{ backgroundImage: "url('./assets/img/logo.png')" }}
          ></div>
          <div className="controls">
            <div className="search">
              <input type="text" placeholder="Deseja procurar por algo?" />
              <span className="button bgcolor-secondary">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <div className="access-list">
              <button
                id="btnPopLogin"
                onClick={() => console.log("popLoginForm(this)")}
                className="btn border-secondary color-secondary"
                style={{ width: "135px" }}
              >
                Efetuar login{" "}
                <i
                  className="fas fa-door-open"
                  style={{ marginLeft: "10px" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className="bgcolor-secondary">
        <ul>
          <a href="./index.html">
            <li className="active color-secondary">Home</li>
          </a>
          <li>Estrutura</li>
          <a href="./eixo.html">
            <li>Eixos</li>
          </a>
          <a href="./demandas.html">
            <li>Demandas</li>
          </a>
          <li>Notícias</li>
          <li>Equipe técnica</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="slider">
        <div className="controls">
          <i
            className="btnSliderLeft fas fa-arrow-left bgcolor-secondary"
            style={{ left: "15px", display: "none" }}
          ></i>
          <i
            className="btnSliderRight fas fa-arrow-right bgcolor-secondary"
            style={{ right: "15px" }}
          ></i>
        </div>
        <div className="slider-imgs" style={{ width: "200%", display: "flex" }}>
          <div
            style={{
              backgroundImage:
                "url(https://www.lindeiros.org.br/upload/16546507855a58f055370943.88899673.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url(https://www.lindeiros.org.br/upload/180312592759adad53ec8cc1.96030545.png)",
            }}
          ></div>
        </div>
        <div
          className="contributors"
          style={{ backgroundImage: "url(img/Rectangle.png)" }}
        >
          <div className="imgs">
            <div
              style={{ backgroundImage: "url(contributors/image2.png)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(contributors/image3.png)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(contributors/image4.png)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(contributors/image5.png)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(contributors/image6.png)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(contributors/image7.png)" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="recentPaper">
        <h1 className="color-secondary">Eixos estruturantes</h1>
        <div className="inner">
          <div className="item">
            <div className="icon">
              <i className="fas fa-hotel color-secondary"></i>
            </div>
            <h2 className="color-secondary">Governança Inteligente</h2>
            <h3 className="color-secondary">Eixo 1</h3>
            <p>
              Implantar governança integrada e inteligente nos municípios nos
              municípios do oeste do Paraná para convergir os esforços e ...
            </p>
            <a href="./eixo.html#1">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-id-card color-secondary"></i>
            </div>
            <h2 className="color-secondary">Gestão Pública</h2>
            <h3 className="color-secondary">Eixo 2</h3>
            <p>
              Coordenar ações para modernizar a gestão pública municipal com a
              formação continuada dos servidores públicos ...
            </p>
            <a href="./eixo.html#2">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-tree color-secondary"></i>
            </div>
            <h2 className="color-secondary">Sustentabilidade</h2>
            <h3 className="color-secondary">Eixo 3</h3>
            <p>
              Promover a sustentabilidade efetiva para o desenvolvimento com
              ações coordenadas visando maior equilíbrio entre.
            </p>
            <a href="./eixo.html#3">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-briefcase color-secondary"></i>
            </div>
            <h2 className="color-secondary">Negócios e renda</h2>
            <h3 className="color-secondary">Eixo 4</h3>
            <p>
              Promover a autonomia, o desenvolvimento humano, social e
              profissional visando geração de emprego e renda a partir ...
            </p>
            <a href="./eixo.html#4">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-heartbeat color-secondary"></i>
            </div>
            <h2 className="color-secondary">Saúde</h2>
            <h3 className="color-secondary">Eixo 5</h3>
            <p>
              Diagnosticar a situação da saúde pública e qualidade de vida da
              população do oeste do Paraná para proposição de ações e ...
            </p>
            <a href="./eixo.html#5">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-university color-secondary"></i>
            </div>
            <h2 className="color-secondary">Papel da universidade </h2>
            <h3 className="color-secondary">Eixo 6</h3>
            <p>
              Inserir as universidades públicas e particulares na promoção do
              desenvolvimento efetivo dos municípios do oeste do Paraná e na
              indução ...
            </p>
            <a href="./eixo.html#6">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-seedling color-secondary"></i>
            </div>
            <h2 className="color-secondary">Agricultura Familiar</h2>
            <h3 className="color-secondary">Eixo 7</h3>
            <p>
              Desenvolver ações visando a qualidade de vida, uso equilibrado e
              racional dos recursos naturais, e, viabilidade econômica da
              agricultura familiar.
            </p>
            <a href="./eixo.html#7">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-laptop-code color-secondary"></i>
            </div>
            <h2 className="color-secondary">Inovação</h2>
            <h3 className="color-secondary">Eixo 8</h3>
            <p>
              Promover e articular os ecossistemas de inovação e fomentar
              tecnologias visando a competitividade nos arranjos produtivos e
              prospecção de novos negócios.
            </p>
            <a href="./eixo.html#8">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-drumstick-bite color-secondary"></i>
            </div>
            <h2 className="color-secondary">Segurança e Competitividade</h2>
            <h3 className="color-secondary">Eixo 9</h3>
            <p>
              Garantir a SEGURANÇA e a COMPETITIVIDADE da cadeia produtiva de
              proteínas animais e vegetal.
            </p>
            <a href="./eixo.html#9">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-sitemap color-secondary"></i>
            </div>
            <h2 className="color-secondary">Infraestrutura</h2>
            <h3 className="color-secondary">Eixo 10</h3>
            <p>
              Diagnosticar e encaminhar as demandas de infraestrutura da região
              e municípios lindeiros.
            </p>
            <a href="./eixo.html#10">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
          <div className="item">
            <div className="icon">
              <i className="fas fa-shield-alt color-secondary"></i>
            </div>
            <h2 className="color-secondary">Segurança</h2>
            <h3 className="color-secondary">Eixo 11</h3>
            <p>
              Promover e desenvolver ações para Segurança Pública na Faixa de
              Fronteira.
            </p>
            <a href="./eixo.html#11">
              <button className="btn color-secondary border-secondary">
                Ver mais
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="left">
          <h1 className="border-left-secondary color-secondary">Objetivos</h1>
          <p>
            O programa de governança, inovação e inteligência para
            desenvolvimento dos arranjos produtivos nos municípios lindeiros ao
            lago de Itaipu, tem por objetivo principal de transformar território
            de forma a contemplar as estruturas, ações e projetos em
            desenvolvimento, integrar as instituições com interesses comuns e
            coletivos e convergir com inteligência os esforços e recursos para
            atender efetivamente as demandas contemporâneas e as tendências
            disruptivas.
          </p>
          <div style={{ backgroundImage: "url(img/idea.jpg)" }}></div>
        </div>
        <div className="right">
          <div className="top">
            <h1 className="color-secondary">Ultimas demandas</h1>
            <a href="./demandas.html">
              <button className="btn bgcolor-secondary">Ver todas</button>
            </a>
          </div>
          <div className="demandas">
            <div className="item">
              <div
                className="img"
                style={{ backgroundImage: "url(img/logo.png)" }}
              ></div>
              <div className="info">
                <h2 className="color-secondary">Campo de titulo da demanda</h2>
                <p>Município: Santa Helena</p>
                <p>Categoria: Área agrícola</p>
              </div>
            </div>
            <div className="item">
              <div
                className="img"
                style={{ backgroundImage: "url(img/logo.png)" }}
              ></div>
              <div className="info">
                <h2 className="color-secondary">Campo de titulo da demanda</h2>
                <p>Município: Santa Helena</p>
                <p>Categoria: Área agrícola</p>
              </div>
            </div>
            <div className="item">
              <div
                className="img"
                style={{ backgroundImage: "url(img/logo.png)" }}
              ></div>
              <div className="info">
                <h2 className="color-secondary">Campo de titulo da demanda</h2>
                <p>Município: Santa Helena</p>
                <p>Categoria: Área agrícola</p>
              </div>
            </div>
            <div className="item">
              <div
                className="img"
                style={{ backgroundImage: "url(img/logo.png)" }}
              ></div>
              <div className="info">
                <h2 className="color-secondary">Campo de titulo da demanda</h2>
                <p>Município: Santa Helena</p>
                <p>Categoria: Área agrícola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter bgcolor-secondary">
        <div className="left">
          <h1>Possui alguma duvida?</h1>
          <p>Envie suas dúvidas ou sugestões no formulário ao lado.</p>
        </div>
        <div className="right">
          <div className="block">
            <input type="text" placeholder="Seu email" />
          </div>
          <div className="block" style={{ position: "relative" }}>
            <textarea placeholder="escreva uma mensagem"></textarea>
            <button className="btnEnviar bgcolor-secondary">
              <i className="fas fa-paper-plane" style={{ color: "#fff" }}></i>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div className="col">
          <div
            className="logo"
            style={{ backgroundImage: "url(img/logo.png)" }}
          ></div>
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
      <div className="btnAdmin">
        <p>
          Acesso restrito <i className="fas fa-door-open"></i>
        </p>
      </div>
    </>
  );
};

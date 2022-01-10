import React from "react";

// Styles
import "../assets/css/index.html";
import "../assets/css/demandas.css";


export const Demandas = () => {
  const popLoginForm = (e: any) => {};

  return (
    <>
      <div>
        <header style={{ backgroundImage: "url(img/bgn.jpg)" }}>
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
                <button
                  id="btnPopLogin"
                  onClick={popLoginForm(this)}
                  className="btn border-secondary color-secondary"
                  style={{ width: 135 }}
                >
                  Efetuar login{" "}
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
              <li>Eixos</li>
            </a>
            <a href="./demandas.html">
              <li className="active color-secondary">Demandas</li>
            </a>
            <li>Notícias</li>
            <li>Equipe técnica</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div className="demandas">
          <aside className="filtros">
            <div className="block">
              <h2 className="color-secondary">Pesquisa por status</h2>
              <ul style={{ width: "100%" }}>
                <li style={{ width: "80%", height: 50 }}>
                  <select name="filter[status]" className="demandaStatus">
                    <option>Selecione uma opção</option>
                    <option>Recebendo propostas</option>
                    <option>Encerrados</option>
                    <option>Resolvidos</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="block">
              <h2 className="color-secondary">Pesquisa por eixos</h2>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="gov"
                    id="gov"
                  />{" "}
                  <label htmlFor="gov">Governança Inteligente</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="gestao"
                    id="gestao"
                  />{" "}
                  <label htmlFor="gestao">Gestão Pública</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="susten"
                    id="susten"
                  />{" "}
                  <label htmlFor="susten">Sustentabilidade</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="renda"
                    id="renda"
                  />{" "}
                  <label htmlFor="renda">Negócios e renda</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="saude"
                    id="saude"
                  />{" "}
                  <label htmlFor="saude">Saúde</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="universidade"
                    id="universidade"
                  />{" "}
                  <label htmlFor="universidade">Papel da universidade</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="agricultura"
                    id="agricultura"
                  />{" "}
                  <label htmlFor="agricultura">Agricultura Familiar</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="inovacao"
                    id="inovacao"
                  />{" "}
                  <label htmlFor="inovacao">Inovação</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="protAnimal"
                    id="protAnimal"
                  />{" "}
                  <label htmlFor="protAnimal">
                    Segurança e Competitividade
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="infra"
                    id="infra"
                  />{" "}
                  <label htmlFor="infra">Infraestrutura</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[eixos]"
                    defaultValue="seguranca"
                    id="seguranca"
                  />{" "}
                  <label htmlFor="seguranca">Segurança</label>
                </li>
              </ul>
            </div>
            <div className="block">
              <h2 className="color-secondary">Pesquisa por município</h2>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="mn"
                    id="mn"
                  />
                  <label htmlFor="mn">Mundo Novo</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="tr"
                    id="tr"
                  />
                  <label htmlFor="tr">Terra Roxa</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="gua"
                    id="gua"
                  />
                  <label htmlFor="gua">Guaíra</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="mer"
                    id="mer"
                  />
                  <label htmlFor="mer">Mercedes</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="mare"
                    id="mare"
                  />
                  <label htmlFor="mare">Marechal Cândido Rondon</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="pb"
                    id="pb"
                  />
                  <label htmlFor="pb">Pato Bragado</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="entrio"
                    id="entrio"
                  />
                  <label htmlFor="entrio">Entre Rios do Oeste</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="sh"
                    id="sh"
                  />
                  <label htmlFor="sh">Santa Helena</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="stjo"
                    id="stjo"
                  />
                  <label htmlFor="stjo">São José das Palmeiras</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="diao"
                    id="diao"
                  />
                  <label htmlFor="diao">Diamante D’Oeste</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="mis"
                    id="mis"
                  />
                  <label htmlFor="mis">Missal</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="ita"
                    id="ita"
                  />
                  <label htmlFor="ita">Itaipulândia</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="medi"
                    id="medi"
                  />
                  <label htmlFor="medi">Medianeira</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="stmig"
                    id="stmig"
                  />
                  <label htmlFor="stmig">São Miguel do Iguaçu</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="sttere"
                    id="sttere"
                  />
                  <label htmlFor="sttere">Santa Terezinha de Itaipu</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="filter[cidades]"
                    defaultValue="foz"
                    id="foz"
                  />
                  <label htmlFor="foz">Foz do Iguaçu</label>
                </li>
              </ul>
            </div>
          </aside>
          <div className="lista">
            <div className="head">
              <div className="title">
                <span className="bgcolor-secondary">25</span>
                <h2>Demandas encontradas</h2>
              </div>
              <div className="controls">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Encontre uma demanda"
                    id="pesquisaDemanda"
                    name="filter[texto]"
                  />
                  <button className="bgcolor-secondary">
                    <i className="fas fa-search" style={{ color: "#fff" }} />
                  </button>
                </div>
                <select name="filter[order]" className="demandaOrder">
                  <option>Mais recente</option>
                  <option>Mais antigas</option>
                </select>
              </div>
            </div>
            <div id="listaDemandas">
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="conteudo">
                  <div className="title">
                    <h2 className="color-secondary">
                      Desenvolvimento do projeto tal{" "}
                      <span className="etiqueta etiqueta-resolvido">
                        Resolvido
                      </span>
                    </h2>
                    <p className="data">Criado em 25 de fev, 2022</p>
                  </div>
                  <div className="desc">
                    <label
                      style={{
                        fontWeight: "bolder",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      Descrição
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum minima, asperiores voluptatum vitae consequuntur,
                      quod cum nostrum earum quasi perspiciatis.
                    </p>
                  </div>
                  <a href="./demandaItem.html">
                    <button className="bgcolor-secondary border-secondary">
                      Ver mais
                    </button>
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="conteudo">
                  <div className="title">
                    <h2 className="color-secondary">
                      Desenvolvimento do projeto tal{" "}
                      <span className="etiqueta etiqueta-recebe">
                        Recebendo propostas
                      </span>
                    </h2>
                    <p className="data">Criado em 25 de fev, 2022</p>
                  </div>
                  <div className="desc">
                    <label
                      style={{
                        fontWeight: "bolder",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      Descrição
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum minima, asperiores voluptatum vitae consequuntur,
                      quod cum nostrum earum quasi perspiciatis.
                    </p>
                  </div>
                  <a href="./demandaItem.html">
                    <button className="bgcolor-secondary border-secondary">
                      Ver mais
                    </button>
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="conteudo">
                  <div className="title">
                    <h2 className="color-secondary">
                      Desenvolvimento do projeto tal{" "}
                      <span className="etiqueta etiqueta-encerrado">
                        Encerrado
                      </span>
                    </h2>
                    <p className="data">Criado em 25 de fev, 2022</p>
                  </div>
                  <div className="desc">
                    <label
                      style={{
                        fontWeight: "bolder",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      Descrição
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum minima, asperiores voluptatum vitae consequuntur,
                      quod cum nostrum earum quasi perspiciatis.
                    </p>
                  </div>
                  <a href="./demandaItem.html">
                    <button className="bgcolor-secondary border-secondary">
                      Ver mais
                    </button>
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="conteudo">
                  <div className="title">
                    <h2 className="color-secondary">
                      Desenvolvimento do projeto tal{" "}
                      <span className="etiqueta etiqueta-recebe">
                        Recebendo propostas
                      </span>
                    </h2>
                    <p className="data">Criado em 25 de fev, 2022</p>
                  </div>
                  <div className="desc">
                    <label
                      style={{
                        fontWeight: "bolder",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      Descrição
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum minima, asperiores voluptatum vitae consequuntur,
                      quod cum nostrum earum quasi perspiciatis.
                    </p>
                  </div>
                  <a href="./demandaItem.html">
                    <button className="bgcolor-secondary border-secondary">
                      Ver mais
                    </button>
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="conteudo">
                  <div className="title">
                    <h2 className="color-secondary">
                      Desenvolvimento do projeto tal{" "}
                      <span className="etiqueta etiqueta-recebe">
                        Recebendo propostas
                      </span>
                    </h2>
                    <p className="data">Criado em 25 de fev, 2022</p>
                  </div>
                  <div className="desc">
                    <label
                      style={{
                        fontWeight: "bolder",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      Descrição
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum minima, asperiores voluptatum vitae consequuntur,
                      quod cum nostrum earum quasi perspiciatis.
                    </p>
                  </div>
                  <a href="./demandaItem.html">
                    <button className="bgcolor-secondary border-secondary">
                      Ver mais
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="paginacao">
              <button className="btn-anterior bgcolor-secondary">
                Anterior
              </button>
              <ul className="pags">
                <li className="pagination-active bgcolor-secondary">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
              <button className="btn-proximo bgcolor-secondary">Proximo</button>
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
        <div className="btnAdmin">
          <p>
            Acesso restrito <i className="fas fa-door-open" />
          </p>
        </div>
      </div>
    </>
  );
};

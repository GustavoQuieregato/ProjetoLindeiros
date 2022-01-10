;/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// Images
import user from "../assets/img/user.png";

// Styles
import "../assets/css/painel.css";

export const painel = () => {
  return (
    <>
      <div>
        <div className="topBar">
          <div
            className="logo"
            style={{ backgroundImage: "url(img/logo.png)" }}
          />
          <div className="info">
            <img src={user} width={45} height={45} />
            <div>
              <p>Seja bem vindo novamente</p>
              <b>Visitante</b>
            </div>
          </div>
          <button className="btnLogOff">
            <i className="fas fa-power-off" />
          </button>
        </div>
        <div className="painelBody">
          <aside className="leftBar bgcolor-secondary">
            <h1>Painel</h1>
            <ul>
              <li>
                <i className="fas fa-home" />
                <p>Inicio</p>
              </li>
              <li>
                <i className="fas fa-user-plus" />
                <p>Cadastro</p>
              </li>
              <li className="active">
                <i className="fas fa-users" />
                <p>Usuarios</p>
              </li>
              <li>
                <i className="fas fa-key" />
                <p>Permissões de usuario</p>
              </li>
            </ul>
          </aside>
          <section className="content">
            <div className="usuario">
              <section className="head" style={{ marginBottom: 20 }}>
                <div className="line">
                  <button id="btnAddUser" className="bgcolor-secondary">
                    Adicionar novo usuario <i className="fas fa-user-plus" />
                  </button>
                  <div className="controls">
                    <div className="input">
                      <input type="text" placeholder="Encontrar usuario" />
                      <i className="fas fa-search color-secondary" />
                    </div>
                    <select
                      className="userOrder"
                      style={{
                        padding: "0 15px",
                        border: "1px solid rgba(0, 0, 0, 0.075)",
                      }}
                    >
                      <option>Ordem Crescente</option>
                      <option>Ordem Descrescente</option>
                    </select>
                  </div>
                </div>
                <div className="filter">
                  <div className="block">
                    <p>Tipo de usuario</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Por instituição</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Por município</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Algum filtro</p>
                    <select>
                      <option />
                    </select>
                  </div>
                </div>
              </section>
              <section className="body">
                <table>
                  <thead
                    className="bgcolor-secondary"
                    style={{ position: "sticky", top: 0 }}
                  >
                    <tr>
                      <th>Ativo</th>
                      <th>Nome</th>
                      <th>Município</th>
                      <th>Usuario</th>
                      <th>Contato</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Guilherme</td>
                      <td>Santa Helena</td>
                      <td>guilhermehd903</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Arlete</td>
                      <td>Santa Helena</td>
                      <td>Arlete123</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Gustavo</td>
                      <td>Santa Helena</td>
                      <td>gustavo123</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>outro usuario</td>
                      <td>Santa Helena</td>
                      <td>usuario123</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>outro usuario</td>
                      <td>Santa Helena</td>
                      <td>usuario123</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>outro usuario</td>
                      <td>Santa Helena</td>
                      <td>usuario123</td>
                      <td>(15) 99999-9999</td>
                      <td>
                        <button>
                          <i className="fas fa-pencil" />
                        </button>
                        <button>
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

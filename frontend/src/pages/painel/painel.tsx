import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "assets/css/painel.css";
import { logo } from "assets/img";
// Images
import user from "assets/img/user.png";
import { Container } from "../demands/style";
import { PopUpUserCad } from "components/modais/user/cadUser";
import { useAuth } from "hooks/router";
import { FindAllUser } from "API/Users/find.api";
import { deleteUser } from "API/Users/crud.api";
import { IUser } from "interfaces/IfaceProps";
import { PopPermission } from "components/modais/permission";
import filterCity from "assets/data/cities";
import { PopupGetterRepresent } from "components/modais/representantes/getAllRepresent";

export const Painel = () => {
  const [newUsers, setNewUsers] = useState<IUser[]>();
  const handleAllUsers = async (): Promise<IUser[] | undefined> => {
    const data = await FindAllUser();
    setNewUsers(data?.response);
    return data?.response;
  };
  const auth = useAuth();
  handleAllUsers();
  const [btnTrigger, setTrigger] = useState(false);
  const [btnTrigger1, setTrigger1] = useState(false);
  const [btnTrigger2, setTrigger2] = useState(false);

  const handleRemoveUser = async (nameUser: string) => {
    const userFound = newUsers?.filter(
      (user: IUser) => user.name === nameUser && user
    )[0];

    userFound && (await deleteUser({ idUser: userFound.id }));
  };

  return (
    <>
      <PopPermission setTrigger={setTrigger} trigger={btnTrigger} />
      <PopupGetterRepresent
        setTrigger={setTrigger2}
        trigger={btnTrigger2}
        representates={[...(newUsers || [])]}
      />
      <div>
        <div className="topBar">
          <Container className="img" background={logo} />
          <div className="info">
            <img src={user} width={45} height={45} />
            <div>
              <p>Seja bem vindo novamente</p>
              <b>{"Arlete Beuren - root"}</b>
            </div>
          </div>
          <button className="btnLogOff">
            <Link to="/" onClick={() => auth.signout(() => {})}>
              <i className="fas fa-power-off" />
            </Link>
          </button>
        </div>
        <div className="painelBody">
          <aside className="leftBar bgcolor-secondary">
            <h1>Painel</h1>
            <ul>
              <Link to="/">
                <li>
                  <i className="fas fa-home" />
                  <p>Inicio</p>
                </li>
              </Link>
              <li className="active">
                <i className="fas fa-users" />
                <p>Administradores</p>
              </li>
              <li onClick={() => setTrigger2(true)}>
                <i className="fas fa-users" />
                <p>Representantes</p>
              </li>
              <li onClick={() => setTrigger(true)}>
                <i className="fas fa-key" />
                <p>Permiss??es de usuario</p>
              </li>
            </ul>
          </aside>
          <section className="content">
            <div className="usuario">
              <section className="head" style={{ marginBottom: 20 }}>
                <div className="line">
                  <button
                    id="btnAddUser"
                    onClick={() => setTrigger1(true)}
                    className="bgcolor-secondary"
                  >
                    Adicionar novo usuario <i className="fas fa-user-plus" />
                  </button>

                  <PopUpUserCad
                    trigger={btnTrigger1}
                    setTrigger={setTrigger1}
                  />

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
                      <option>Representante comercial</option>
                      <option>Administrador</option>
                    </select>
                  </div>
                  <div className="block">
                    <p>Por institui????o</p>
                    <select>
                      <option>UTFPR</option>
                      <option>UFA</option>
                      <option>UFSC</option>
                    </select>
                  </div>
                  <div className="block">
                    <p>Por munic??pio</p>
                    <select>
                      {newUsers &&
                        filterCity.map((city) => (
                          <option key={city.sigle}>{city.name}</option>
                        ))}
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
                      <th>Munic??pio</th>
                      <th>Usuario</th>
                      <th>Contato</th>
                      <th>A????es</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUsers ? (
                      newUsers?.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{user.name}</td>
                          <td>{user.city}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>
                            <button>
                              <i className="fas fa-pencil" />
                            </button>
                            <button
                              onClick={(_) => handleRemoveUser(user.name)}
                            >
                              <i className="fas fa-trash" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div></div>
                    )}
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

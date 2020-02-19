import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {

  //State para iniciar Sesion
  const [ usuario, guardarUsuario ] = useState({
    email : '',
    password : '',
  });

  //Extraer de Usuario
  const { email, password } = usuario

  const onchange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  //Cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.prevent.default();

    //Validar que no haya campos vacios


  }

  return (
    <Fragment>
      <div className="login-box">
        <div className="login-logo">
          <Link to={'/panel-control'}>
            <b>JQC</b>Hermanos
          </Link>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">
            <b>Ingrese sus Credenciles para acceder al sistema.</b>
          </p>
          <form
            onSubmit={onSubmit}
          >
            <div className="form-group has-feedback">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Ingrese su Email"
                onChange={onchange}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>

            <div className="form-group has-feedback">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Ingrese Password"
                onChange={onchange}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            <div className="row">
              <div className="col-xs-12">
                <Link
                  to="/panel-control"
                  className="btn btn-primary btn-block btn-flat"
                ><b>INGRESAR AL SISTEMA</b></Link>
              </div>
            </div>
          </form>
          <br />
          <Link to={'/nuevo-usuario'} className="text-center">
            <b>Obtener Cuenta</b>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;

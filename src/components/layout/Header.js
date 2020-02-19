import React, { Fragment } from 'react';

function Header() {
    return (
        <Fragment>
            <header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>A</b>LT</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {/* User Account: style can be found in dropdown.less */}
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                    <span className="hidden-xs">Carlos Sabrera</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* User image */}
                                    <li className="user-header">
                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                        <p>
                                            <b>Carlos Sabrera</b>
                                            <small>Administrador Informatico</small>
                                        </p>
                                    </li>
                                    {/* Menu Footer*/}
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat"><b>Ver Perfil</b></a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat"><b>Cerrar Sesión</b></a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </Fragment>
    );
}

export default Header;

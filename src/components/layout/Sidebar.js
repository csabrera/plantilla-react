import React, { Fragment } from 'react';

import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <Fragment>
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info">
                            <p><b>Carlos Sabrera</b></p>
                            <span>Administrador</span>
                        </div>
                    </div>
                    {/* search form */}
                    <form method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                </button>
                            </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="fake_url">
                                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><Link to={'/dashborad'}><i className="fa fa-circle-o" /> Dashboard v1</Link></li>
                                <li><Link to={'tabla'}><i className="fa fa-circle-o" />Tabla</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-share" /> <span>Multilevel</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
                                <li className="treeview">
                                    <a href="fake_url"><i className="fa fa-circle-o" /> Level One
              <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Two</a></li>
                                        <li className="treeview">
                                            <a href="fake_url"><i className="fa fa-circle-o" /> Level Two
                  <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
                            </ul>
                        </li>
                        <li className="header">LABELS</li>
                        <li><a href="fake_url"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>

        </Fragment>
    );
}

export default Sidebar;

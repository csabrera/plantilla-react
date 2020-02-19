import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashborad from './Dashboard'
import Table from './Table'

function Content() {
    return (
        <Switch>
            <Route path="/dashborad" component={Dashborad} />
            <Route path="/" component={Table} />
        </Switch>
    );
}

export default Content;

import React from 'react'
import {Route, IndexRoute, browserHistory} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Add from '../containers/Add'
import NotFound from '../containers/NotFound'

const createRoutes = () => {
    return (
        <Route
            path='/'
            component = {Template}
        >
        <IndexRoute
            component={Home}

        />

        <Route
            path={'/add'}
            component={Add}

        />
        <Route
            path={'/*'}
            component={NotFound}

        />

        </Route>
    )
}

const Routes = createRoutes()

export default Routes

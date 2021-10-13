import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
//components
import { Store } from './Components/Store'
import { ContextProducts } from './Contexts/ContextProducts'
import {More} from "./Components/More"
import { ContextShopping } from './Contexts/ContextShopping'
import { NavBar } from './Components/NavBar'
import { Buy } from './Components/Buy'


export const App = () => {
  return (
    <div>
        <ContextProducts>
          <ContextShopping>
            <NavBar />

          <Switch>
            <Route path="/products/:id" component={More} />
            <Route path="/products" component={Store} />
            <Route path="/buy"  component={Buy} />
            <Redirect to="/products" /> 
          </Switch>
          </ContextShopping>
        </ContextProducts>
    </div>
  )
}

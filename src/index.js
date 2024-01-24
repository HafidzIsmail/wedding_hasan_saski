import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MainPage from './views/main-page'
import NotFound from './views/not-found'

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Hasan & Saski Wedding Invitation" />
    <meta property="og:image" content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12bc0205-6668-4b08-95c0-782e5f1c39ff/f5bedace-bd02-47a2-9403-ba2b61a2a3e5?org_if_sml=1&amp;q=80&amp;force_format=original" />
    {/* <meta name="twitter:card" content="summary_large_image" /> */}
    <meta name="description" content="You are Invited! Our wedding ceremonial will be held in 4 February 2024. Take a look this wedding invitation for more info!" />

    <title>Title</title>
  </head>

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


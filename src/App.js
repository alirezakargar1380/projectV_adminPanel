import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: true
    }
  }

  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            
            {
              (this.state.login) ? 
              <>
                <Route path="*" name="Home" element={<DefaultLayout />} />
                <Route path="/" element={<Navigate to="dashboard" replace />} />
              </> : <Route path="/" element={<Navigate to="login" replace />} />
              // (this.state.login) ? <Route path="/" element={<Navigate to="true" replace />} /> : <Route path="/" element={<Navigate to="false" replace />} />
            }
            
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App

import { Suspense } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import logo from '../logo.svg'

//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'


const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            to={ route.to }
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                            {route.name}
                        </NavLink>
                    </li>
                ))
              }

            </ul>
          </nav>

          <Routes>
            {
                routes.map(route => (
                    <Route
                        key={route.to}
                        path={route.path}
                        element={<route.Component/>}
                    />
                ))
            }
            <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation

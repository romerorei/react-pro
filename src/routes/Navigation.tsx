import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'

import { RegisterPage } from '../03-froms/pages/RegisterPage'
import { FormikBasicPage } from '../03-froms/pages/FormikBasicPage'
import { FormikYupPage } from '../03-froms/pages/FormikYupPage'
import { FormikComponents } from '../03-froms/pages/FormikComponents'
import { FormikAbstratation } from '../03-froms/pages/FormikAbstractation'

import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstratation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstratation</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage/>} />
          <Route path="formik-yup" element={<FormikYupPage/>} />
          <Route path="formik-components" element={<FormikComponents/>} />
          <Route path="formik-abstratation" element={<FormikAbstratation/>} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default Navigation

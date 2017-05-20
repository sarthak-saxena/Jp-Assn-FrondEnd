import Main from '../components/main.jsx'
import Login from '../components/Login/index.jsx'
export const Routes = [{
    path: '/main',
    component: Main
  }, {
    path: '/login',
    component:  Login,
    exact: true,
    login: false
}]

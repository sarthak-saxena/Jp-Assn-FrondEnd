import Main from '../components/main.jsx'
import Login from '../components/Login/index.jsx'
import SignUp from '../components/Login/signUp.jsx'
export const Routes = [{
    path: '/main',
    component: Main
  }, {
    path: '/login',
    component:  Login,
    exact: true,
    login: false
  }, {
    path: '/signUp',
    component: SignUp
  }
]

import App from '../components/App.jsx'
import Foo from '../components/Foo.jsx'
import Login from '../components/Login/index.jsx'
export const Routes = [{
    path: '/foo',
    component: Foo
  }, {
    path: '/',
    component: App,
    exact: true
  }, {
    path: '/login',
    component:  Login,
    exact: true,
    login: false
}]

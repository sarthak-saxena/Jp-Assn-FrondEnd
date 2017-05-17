import Foo from '../components/Foo.jsx'
import Login from '../components/Login/index.jsx'
export const Routes = [{
    path: '/foo',
    component: Foo
  }, {
    path: '/login',
    component:  Login,
    exact: true,
    login: false
}]

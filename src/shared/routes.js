import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]
export default routes;
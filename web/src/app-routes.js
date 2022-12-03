import { HomePage, ClientesPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    // {
    //     path: '/tasks',
    //     element: TasksPage
    // },
    {
        path: '/clientes',
        element: ClientesPage
    },
    {
        path: '/home',
        element: HomePage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});

import { HomePage, ClientesPage, ProfissionalPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    // {
    //     path: '/tasks',
    //     element: TasksPage
    // },
    {
        path: '/cliente',
        element: ClientesPage
    },
    {
        path: '/profissional',
        element: ProfissionalPage
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

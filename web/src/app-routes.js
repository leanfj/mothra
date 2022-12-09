import { HomePage, ClientesPage, ProfissionaisPage, ServicosPage, TasksPage, AgendamentosPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/clientes',
        element: ClientesPage
    },
    {
        path: '/profissionais',
        element: ProfissionaisPage
    },
    {
        path: '/servicos',
        element: ServicosPage
    },
    {
        path: '/agendamentos',
        element: AgendamentosPage
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

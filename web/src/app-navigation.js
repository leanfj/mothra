export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Cadastros',
    icon: 'folder',
    items: [
      {
        text: 'Clientes',
        path: '/clientes',
        icon: 'group'
      },
      {
        text: 'Profissionais',
        path: '/profissionais',
        icon: 'group'
      },
      {
        text: 'Serviços',
        path: '/servicos',
        icon: 'selectall'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  },
  {
    text: 'Módulos',
    icon: 'mediumiconslayout',
    items: [
      {
        text: 'Agendamentos',
        path: '/agendamentos',
        icon: 'event'
      },
    ]
  }
];

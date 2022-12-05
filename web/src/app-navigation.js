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
        path: '/cliente'
      },
      {
        text: 'Profissional',
        path: '/profissional'
      },
      {
        text: 'Serviço',
        path: '/servico'
      },
      // {
      //   text: 'Tasks',
      //   path: '/tasks'
      // }
    ]
  }
];

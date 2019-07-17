const routes = [
  {
    path: '/',
    component: () => import('@/app/layout'),
    redirect: 'test',
    children: [
      {
        path: 'test',
        meta: {
          id: 'test',
          name: 'test'
        },
        component: () => import('@/app/test')
      },
      {
        path: 'hh',
        meta: {
          id: 'hh',
          name: 'hh'
        },
        component: () => import('@/app/hh')
      }
    ]
  }
]


export default routes

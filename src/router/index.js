const routes = [
  {
    path: '/',
    component: () => import('@/app/layout'),
    redirect: 'test',
    children: [
      {
        path: 'test',
        component: () => import('@/app/test')
      }
    ]
  }
]


export default routes

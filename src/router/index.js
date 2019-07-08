const routes = [
  {
    path: '/',
    component: () => import('@/app/layout'),
    redirect: 'test',
    children: [
      {
        path: 'test',
        component: () => import('@/app/index')
      }
    ]
  }
]


export default routes

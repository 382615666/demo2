import childrenRoutes from './children-routes'
const routes = [
  {
    path: '/',
    component: () => import('@/app/layout'),
    redirect: 'test',
    children: childrenRoutes
  }
]


export default routes

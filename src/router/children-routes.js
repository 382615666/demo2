const childrenRoutes = [
  {
    path: 'test',
    meta: {
      id: 'test',
      title: 'test'
    },
    component: () => import('@/app/test')
  },
  {
    path: 'hh',
    meta: {
      id: 'hh',
      title: 'hh'
    },
    component: () => import('@/app/hh')
  }
]
export default childrenRoutes

export const longinRouter = {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login')
  }
  export const page404 = {
    path: '/404',
    name: '404',
    meta: {
      title: '404-页面不存在'
    },
    component: () => import('@/views/404')
  }
  export const registerRouter = {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import('@/views/register')
  }
  export const adminRouter = {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/index'),
    children: [
    {
        path: 'page',
        name: 'page',
        title: '文章管理',
        redirect: 'page/list',
        children: [
        {
            path: 'list',
            component: () => import('@/views/admin/pagelist'),
            name: 'pageList',
            title: '文章列表'
        }
        ]
    },
    {
        path: 'user',
        name: 'user',
        title: '用户管理',
        redirect: 'user/list',
        children: [
        {
            path: 'list',
            component: () => import('@/views/admin/userlist'),
            name: 'userList',
            title: '用户列表'
        }
        ]
    },
    {
        path: 'tag',
        name: 'tag',
        redirect: 'tag/list',
        title: '标签管理',
        children: [
        {
            path: 'list',
            component: () => import('@/views/admin/taglist'),
            name: 'tagList',
            title: '标签列表'
        }
        ]
    }
    ]
}
  export const routers = [ // 上面定义的路由均写在 routers 
    longinRouter,
    page404,
    registerRouter,
    adminRouter
  ]
  
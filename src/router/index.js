import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'the_hoc_vien'
      }
    },
    {
      path: '/the-hoc-vien',
      name: 'the_hoc_vien',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue')
    },

    {
      path: '/tao-anh-chung-chi',
      name: 'tao_anh_chung_chi',
      component: () => import('../views/CertificateView.vue')
    },

    {
      path: '/can-cuoc-cong-dan',
      name: 'can_cuoc_cong_dan',
      component: () => import('../views/CitizenIdentificationCardView.vue')
    },

    {
      path: '/chuyen-ba-nguoi',
      name: 'chuyen_ba_nguoi',
      component: () => import('../views/PhotoOfThreePeople.vue')
    }
  ]
})

export default router

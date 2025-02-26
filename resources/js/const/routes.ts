export const AppRoute = {
  Main: '/',
  Auth: {
    Login: '/auth/login',
  },
  Dashboard: {
    Index: '/dashboard',
    Banners: {
      Index: '/dashboard/banners',
      Create: '/dashboard/banners/create',
      Edit: '/dashboard/banners/:id',
    },
    Vacancies: {
      Index: '/dashboard/vacancies',
      Create: '/dashboard/vacancies/create',
      Edit: '/dashboard/vacancies/:id',
    },
    Companies: {
      Index: '/dashboard/companies',
    }
  },
  NotFound: '*',
};

export const APIRoute = {
  Auth: {
    Check: '/auth/check',
    Login: '/auth/login',
    Logout: '/auth/logout',
  },
};

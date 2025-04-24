export const AppRoute = {
  Main: '/',
  Auth: {
    Login: '/auth/login',
  },
  Vacancies: {
    Show: '/vacancies/:id',
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
      Trash: '/dashboard/vacancies-trash',
    },
    Companies: {
      Index: '/dashboard/companies',
      Create: '/dashboard/companies/create',
      Edit: '/dashboard/companies/:id',
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
  Banners: {
    Index: '/banners',
    Show: '/banners/:id',
  },
  Vacancies: {
    Index: '/vacancies',
    Trash: '/vacancies/trash',
    Restore: '/vacancies/trash/:id',
    Show: '/vacancies/:id',
    Resume: '/vacancies/resume',
  },
  Companies: {
    Index: '/companies',
    Show: '/companies/:id',
  },
};

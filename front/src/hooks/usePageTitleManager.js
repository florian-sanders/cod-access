// import pageTitles from 'src/pageTitles.json';

const usePageTitleManager = (route) => {
  const pageTitles = {
    '/': 'Accueil',
    '/challenges': 'Challenges',
    '/a-propos': 'A propos',
    '/contact': 'Contact',
    '/mentions-legales': 'Mentions légales',
    '/plan-du-site': 'Plan du site',
    '/profil': 'Mon profil',
    '/profil-edit': 'Modification profil',
    '/admin/utilisateurs': 'Liste des utilisateurs - Admin',
    '/admin/exercices': 'Liste des exercices - Admin',
    '/admin/creer-exercice': 'Création d\'exercice - Admin',
  };
  const siteTitle = 'Cod\'Access';

  document.title = `${pageTitles[route.pathname]} - ${siteTitle}`;
};

export default usePageTitleManager;

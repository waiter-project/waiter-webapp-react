/**
 * ici inclure les routes des nouvelles pages du site
 */
export default (store) => {
  return {
    path: '/',
    component: require('./app').default,
    getIndexRoute(partialNextState, callback) {
      callback(null, { component: require('./ui/pages/signin/index').default });
    },
    childRoutes: [
      require('./routes/account/account').default,
      require('./routes/event/event').default,
      require('./routes/map/map').default,
      require('./routes/security/security').default,
      require('./routes/signin/signin').default,
      require('./routes/signup/signup').default
    ]
  }
}
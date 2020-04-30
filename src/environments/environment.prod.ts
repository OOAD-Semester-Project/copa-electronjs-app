
const keycloakConfig = {
  url: 'https://copa-keycloak.herokuapp.com/auth',
  realm: 'copa',
  clientId: 'angular-client'
};
export const environment = {
  production: true,
  keycloak: keycloakConfig,  
  clipboardserver: {
    baseUrl: "https://clipboard-syncronization-app.appspot.com"
  }
};
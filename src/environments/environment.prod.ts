
const keycloakConfig = {
  url: 'https://copa-keycloak.herokuapp.com/auth',
  // url: 'http://localhost:8080/auth',
  realm: 'copa',
  clientId: 'angular-client'
};
export const environment = {
  production: true,
  keycloak: keycloakConfig,  
  clipboardserver: {
    // baseUrl: "http://localhost:3010"
    baseUrl: "https://clipboard-syncronization-app.appspot.com"
  }
};
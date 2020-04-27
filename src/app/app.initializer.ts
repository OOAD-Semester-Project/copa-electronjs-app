// import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';


// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => keycloak.init({
//       config: environment.keycloak,
//       initOptions: {
//           onLoad: "login-required",
//         //   redirectUri: 'http://localhost:4200/'
//       }
// }).then(function(authenticated) {    
//     let keycloakService = new KeycloakService();

//     if (authenticated) {               
//         sessionStorage.setItem('kctoken', keycloakService.getKeycloakInstance().token);
//         setInterval(() => {
//           keycloak.getKeycloakInstance().updateToken(10).error(() => keycloak.getKeycloakInstance().logout());
//           sessionStorage.setItem('kctoken', keycloak.getKeycloakInstance().token);
//         }, 10000);
//     }
//     // alert(authenticated ? 'authenticated' : 'not authenticated');
// }).catch(function(err) {
//     console.log("error:  ", err);
//     alert('failed to initialize keycloak service in angular');
// });;
// }
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
      config: {
        url: 'https://copa-keycloak.herokuapp.com/auth',
        // url: 'http://localhost:8080/auth',
        realm: 'copa',
        clientId: 'angular-client', 
        // credentials: {
        //     secret: "d4415343-c66e-4dc0-ba11-afecda429bb2"
        // }
      },
      initOptions: {
          onLoad: "login-required",
        //   checkLoginIframe: false
      }
}).then(function(authenticated) {
    // alert(authenticated ? 'authenticated' : 'not authenticated');
}).catch(function(err) {
    console.log("error:  ", err);
    alert('failed to initialize keycloak service in angular');
});;
}
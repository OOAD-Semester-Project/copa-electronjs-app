import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
// import { environment } from './';
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
          try {
            await keycloak.init({
                config: {
                    url: environment.keycloak.issuer,
                    realm: environment.keycloak.realm,
                    clientId: environment.keycloak.clientId,
                    // credentials: {
                    //     secret: environment.keycloak.clientSecret
                    //   }                     
                },
              loadUserProfileAtStartUp: false,
              initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: true
              },
              bearerExcludedUrls: []
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      };
}
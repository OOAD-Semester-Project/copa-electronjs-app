/*
 Chen, Yi-Cyuan 2014-2017
 @license MIT
 Kirill, Fomichev 2014
 @license MIT
*/
(function(E,L){if("object"===typeof exports)"object"===typeof module?module.exports=L(require("js-sha256"),require("base64-js")):exports.keycloak=L(require("js-sha256"),require("base64-js"));else{!function(){function d(a,c){c?(n[0]=n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0,this.blocks=n):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=
1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=this.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function C(a,c,w){var e;e=typeof a;if("string"===e){var f,x=[],h=a.length,g=0;for(e=0;e<h;++e)128>(f=a.charCodeAt(e))?x[g++]=f:2048>f?(x[g++]=192|f>>6,x[g++]=128|63&f):55296>f||57344<=f?(x[g++]=224|f>>12,x[g++]=128|
f>>6&63,x[g++]=128|63&f):(f=65536+((1023&f)<<10|1023&a.charCodeAt(++e)),x[g++]=240|f>>18,x[g++]=128|f>>12&63,x[g++]=128|f>>6&63,x[g++]=128|63&f);a=x}else{if("object"!==e)throw Error(l);if(null===a)throw Error(l);if(D&&a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||D&&ArrayBuffer.isView(a)))throw Error(l);}64<a.length&&(a=(new d(c,!0)).update(a).array());f=[];x=[];for(e=0;64>e;++e)h=a[e]||0,f[e]=92^h,x[e]=54^h;d.call(this,c,w);this.update(x);this.oKeyPad=f;this.inner=!0;
this.sharedMemory=w}var l="input is invalid type",z="object"==typeof window,u=z?window:{};u.JS_SHA256_NO_WINDOW&&(z=!1);var z=!z&&"object"==typeof self,v=!u.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;v?u=global:z&&(u=self);var z=!u.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,q="function"==typeof define&&define.amd,D=!u.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,c="0123456789abcdef".split(""),t=[-2147483648,8388608,32768,
128],g=[24,16,8,0],I=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,
3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],J=["hex","array","digest","arrayBuffer"],n=[];!u.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});!D||!u.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return"object"==typeof a&&a.buffer&&
a.buffer.constructor===ArrayBuffer});var K=function(a,c){return function(e){return(new d(c,!0)).update(e)[a]()}},G=function(a){var c=K("hex",a);v&&(c=F(c,a));c.create=function(){return new d(a)};c.update=function(a){return c.create().update(a)};for(var e=0;e<J.length;++e){var g=J[e];c[g]=K(g,a)}return c},F=function(a,c){var e=eval("require('crypto')"),x=eval("require('buffer').Buffer"),f=c?"sha224":"sha256";return function(c){if("string"==typeof c)return e.createHash(f).update(c,"utf8").digest("hex");
if(null===c||void 0===c)throw Error(l);return c.constructor===ArrayBuffer&&(c=new Uint8Array(c)),Array.isArray(c)||ArrayBuffer.isView(c)||c.constructor===x?e.createHash(f).update(new x(c)).digest("hex"):a(c)}},E=function(a,c){return function(e,x){return(new C(e,c,!0)).update(x)[a]()}},a=function(a){var c=E("hex",a);c.create=function(c){return new C(c,a)};c.update=function(a,e){return c.create(a).update(e)};for(var e=0;e<J.length;++e){var g=J[e];c[g]=E(g,a)}return c};d.prototype.update=function(a){if(!this.finalized){var c,
e=typeof a;if("string"!==e){if("object"!==e)throw Error(l);if(null===a)throw Error(l);if(D&&a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||D&&ArrayBuffer.isView(a)))throw Error(l);c=!0}for(var d,f=0,t=a.length,h=this.blocks;f<t;){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),c)for(e=this.start;f<t&&64>e;++f)h[e>>2]|=a[f]<<g[3&e++];else for(e=this.start;f<t&&64>e;++f)128>(d=a.charCodeAt(f))?
h[e>>2]|=d<<g[3&e++]:2048>d?(h[e>>2]|=(192|d>>6)<<g[3&e++],h[e>>2]|=(128|63&d)<<g[3&e++]):55296>d||57344<=d?(h[e>>2]|=(224|d>>12)<<g[3&e++],h[e>>2]|=(128|d>>6&63)<<g[3&e++],h[e>>2]|=(128|63&d)<<g[3&e++]):(d=65536+((1023&d)<<10|1023&a.charCodeAt(++f)),h[e>>2]|=(240|d>>18)<<g[3&e++],h[e>>2]|=(128|d>>12&63)<<g[3&e++],h[e>>2]|=(128|d>>6&63)<<g[3&e++],h[e>>2]|=(128|63&d)<<g[3&e++]);this.lastByteIndex=e;this.bytes+=e-this.start;64<=e?(this.block=h[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=
e}return 4294967295<this.bytes&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes%=4294967296),this}};d.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,c=this.lastByteIndex;a[16]=this.block;a[c>>2]|=t[3&c];this.block=a[16];56<=c&&(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes<<3|this.bytes>>>29;a[15]=this.bytes<<3;this.hash()}};d.prototype.hash=function(){var a,
c,g,d,f,t,h,B=this.h0,n=this.h1,l=this.h2,b=this.h3,m=this.h4,y=this.h5,r=this.h6,k=this.h7,p=this.blocks;for(a=16;64>a;++a)c=((f=p[a-15])>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,g=((f=p[a-2])>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,p[a]=p[a-16]+c+p[a-7]+g<<0;h=n&l;for(a=0;64>a;a+=4)this.first?(this.is224?(t=300032,k=(f=p[0]-1413257819)-150054599<<0,b=f+24177077<<0):(t=704751109,k=(f=p[0]-210244248)-1521486534<<0,b=f+143694565<<0),this.first=!1):(c=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),d=(t=B&n)^B&l^h,k=
b+(f=k+((m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&y^~m&r)+I[a]+p[a])<<0,b=f+(c+d)<<0),c=(b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10),d=(h=b&B)^b&n^t,r=l+(f=r+((k>>>6|k<<26)^(k>>>11|k<<21)^(k>>>25|k<<7))+(k&m^~k&y)+I[a+1]+p[a+1])<<0,c=((l=f+(c+d)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),d=(g=l&b)^l&B^h,y=n+(f=y+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+(r&k^~r&m)+I[a+2]+p[a+2])<<0,c=((n=f+(c+d)<<0)>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),d=(h=n&l)^n&b^g,m=B+(f=m+((y>>>6|y<<26)^(y>>>11|
y<<21)^(y>>>25|y<<7))+(y&r^~y&k)+I[a+3]+p[a+3])<<0,B=f+(c+d)<<0;this.h0=this.h0+B<<0;this.h1=this.h1+n<<0;this.h2=this.h2+l<<0;this.h3=this.h3+b<<0;this.h4=this.h4+m<<0;this.h5=this.h5+y<<0;this.h6=this.h6+r<<0;this.h7=this.h7+k<<0};d.prototype.hex=function(){this.finalize();var a=this.h0,d=this.h1,g=this.h2,t=this.h3,f=this.h4,n=this.h5,h=this.h6,l=this.h7,a=c[a>>28&15]+c[a>>24&15]+c[a>>20&15]+c[a>>16&15]+c[a>>12&15]+c[a>>8&15]+c[a>>4&15]+c[15&a]+c[d>>28&15]+c[d>>24&15]+c[d>>20&15]+c[d>>16&15]+c[d>>
12&15]+c[d>>8&15]+c[d>>4&15]+c[15&d]+c[g>>28&15]+c[g>>24&15]+c[g>>20&15]+c[g>>16&15]+c[g>>12&15]+c[g>>8&15]+c[g>>4&15]+c[15&g]+c[t>>28&15]+c[t>>24&15]+c[t>>20&15]+c[t>>16&15]+c[t>>12&15]+c[t>>8&15]+c[t>>4&15]+c[15&t]+c[f>>28&15]+c[f>>24&15]+c[f>>20&15]+c[f>>16&15]+c[f>>12&15]+c[f>>8&15]+c[f>>4&15]+c[15&f]+c[n>>28&15]+c[n>>24&15]+c[n>>20&15]+c[n>>16&15]+c[n>>12&15]+c[n>>8&15]+c[n>>4&15]+c[15&n]+c[h>>28&15]+c[h>>24&15]+c[h>>20&15]+c[h>>16&15]+c[h>>12&15]+c[h>>8&15]+c[h>>4&15]+c[15&h];return this.is224||
(a+=c[l>>28&15]+c[l>>24&15]+c[l>>20&15]+c[l>>16&15]+c[l>>12&15]+c[l>>8&15]+c[l>>4&15]+c[15&l]),a};d.prototype.toString=d.prototype.hex;d.prototype.digest=function(){this.finalize();var a=this.h0,c=this.h1,d=this.h2,g=this.h3,f=this.h4,t=this.h5,h=this.h6,n=this.h7,a=[a>>24&255,a>>16&255,a>>8&255,255&a,c>>24&255,c>>16&255,c>>8&255,255&c,d>>24&255,d>>16&255,d>>8&255,255&d,g>>24&255,g>>16&255,g>>8&255,255&g,f>>24&255,f>>16&255,f>>8&255,255&f,t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>
8&255,255&h];return this.is224||a.push(n>>24&255,n>>16&255,n>>8&255,255&n),a};d.prototype.array=d.prototype.digest;d.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?28:32),c=new DataView(a);return c.setUint32(0,this.h0),c.setUint32(4,this.h1),c.setUint32(8,this.h2),c.setUint32(12,this.h3),c.setUint32(16,this.h4),c.setUint32(20,this.h5),c.setUint32(24,this.h6),this.is224||c.setUint32(28,this.h7),a};C.prototype=new d;C.prototype.finalize=function(){if(d.prototype.finalize.call(this),
this.inner){this.inner=!1;var a=this.array();d.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);d.prototype.finalize.call(this)}};var A=G();A.sha256=A;A.sha224=G(!0);A.sha256.hmac=a();A.sha224.hmac=a(!0);z?module.exports=A:(u.sha256=A.sha256,u.sha224=A.sha224,q&&define(function(){return A}))}();(function(d){"object"===typeof exports&&"undefined"!==typeof module?module.exports=d():"function"===typeof define&&define.amd?define([],d):("undefined"!==typeof window?window:
"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).base64js=d()})(function(){return function(){function d(C,l,z){function u(q,c){if(!l[q]){if(!C[q]){var t="function"==typeof require&&require;if(!c&&t)return t(q,!0);if(v)return v(q,!0);c=Error("Cannot find module '"+q+"'");throw c.code="MODULE_NOT_FOUND",c;}c=l[q]={exports:{}};C[q][0].call(c.exports,function(c){return u(C[q][1][c]||c)},c,c.exports,d,C,l,z)}return l[q].exports}for(var v="function"==typeof require&&require,q=0;q<
z.length;q++)u(z[q]);return u}return d}()({"/":[function(d,C,l){function z(c){var d=c.length;if(0<d%4)throw Error("Invalid string. Length must be a multiple of 4");c=c.indexOf("\x3d");-1===c&&(c=d);return[c,c===d?0:4-c%4]}function u(c,d,g){for(var t=[],l=d;l<g;l+=3)d=(c[l]<<16&16711680)+(c[l+1]<<8&65280)+(c[l+2]&255),t.push(v[d>>18&63]+v[d>>12&63]+v[d>>6&63]+v[d&63]);return t.join("")}l.byteLength=function(c){c=z(c);var d=c[1];return 3*(c[0]+d)/4-d};l.toByteArray=function(c){var d,g=z(c);d=g[0];for(var g=
g[1],l=new D(3*(d+g)/4-g),v=0,n=0<g?d-4:d,u=0;u<n;u+=4)d=q[c.charCodeAt(u)]<<18|q[c.charCodeAt(u+1)]<<12|q[c.charCodeAt(u+2)]<<6|q[c.charCodeAt(u+3)],l[v++]=d>>16&255,l[v++]=d>>8&255,l[v++]=d&255;2===g&&(d=q[c.charCodeAt(u)]<<2|q[c.charCodeAt(u+1)]>>4,l[v++]=d&255);1===g&&(d=q[c.charCodeAt(u)]<<10|q[c.charCodeAt(u+1)]<<4|q[c.charCodeAt(u+2)]>>2,l[v++]=d>>8&255,l[v++]=d&255);return l};l.fromByteArray=function(c){for(var d=c.length,g=d%3,l=[],q=0,n=d-g;q<n;q+=16383)l.push(u(c,q,q+16383>n?n:q+16383));
1===g?(c=c[d-1],l.push(v[c>>2]+v[c<<4&63]+"\x3d\x3d")):2===g&&(c=(c[d-2]<<8)+c[d-1],l.push(v[c>>10]+v[c>>4&63]+v[c<<2&63]+"\x3d"));return l.join("")};var v=[],q=[],D="undefined"!==typeof Uint8Array?Uint8Array:Array;for(d=0;64>d;++d)v[d]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d],q["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(d)]=d;q[45]=62;q[95]=63},{}]},{},[])("/")});var F=L(E.sha256,E.base64js);E.Keycloak=F;"function"===typeof define&&
define.amd&&define("keycloak",[],function(){return F})}})(window,function(E,L){function F(d){function C(a,c){var b;var m=window.crypto||window.msCrypto;if(m&&m.getRandomValues&&window.Uint8Array)b=new Uint8Array(a),m.getRandomValues(b);else for(b=Array(a),m=0;m<b.length;m++)b[m]=Math.floor(256*Math.random());for(var m=Array(a),d=0;d<a;d++)m[d]=c.charCodeAt(b[d]%c.length);return String.fromCharCode.apply(null,m)}function l(){if("undefined"!==typeof a.authServerUrl)return"/"==a.authServerUrl.charAt(a.authServerUrl.length-
1)?a.authServerUrl+"realms/"+encodeURIComponent(a.realm):a.authServerUrl+"/realms/"+encodeURIComponent(a.realm)}function z(b,c){function m(m,p,d,y){e=(e+(new Date).getTime())/2;v(m,p,d,e);M&&(a.tokenParsed&&a.tokenParsed.nonce!=b.storedNonce||a.refreshTokenParsed&&a.refreshTokenParsed.nonce!=b.storedNonce||a.idTokenParsed&&a.idTokenParsed.nonce!=b.storedNonce)?(h("[KEYCLOAK] Invalid nonce, clearing token"),a.clearToken(),c&&c.setError()):y&&(a.onAuthSuccess&&a.onAuthSuccess(),c&&c.setSuccess())}var d=
b.code,k=b.error,p=b.prompt,e=(new Date).getTime();if(k)"none"!=p?(d={error:k,error_description:b.error_description},a.onAuthError&&a.onAuthError(d),c&&c.setError(d)):c&&c.setSuccess();else if("standard"!=a.flow&&(b.access_token||b.id_token)&&m(b.access_token,null,b.id_token,!0),"implicit"!=a.flow&&d){var d="code\x3d"+d+"\x26grant_type\x3dauthorization_code",k=a.endpoints.token(),g=new XMLHttpRequest;g.open("POST",k,!0);g.setRequestHeader("Content-type","application/x-www-form-urlencoded");d+="\x26client_id\x3d"+
encodeURIComponent(a.clientId);d+="\x26redirect_uri\x3d"+b.redirectUri;b.pkceCodeVerifier&&(d+="\x26code_verifier\x3d"+b.pkceCodeVerifier);g.withCredentials=!0;g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status){var b=JSON.parse(g.responseText);m(b.access_token,b.refresh_token,b.id_token,"standard"===a.flow);K()}else a.onAuthError&&a.onAuthError(),c&&c.setError()};g.send(d)}}function u(b){function c(b){a.endpoints=b?{authorize:function(){return b.authorization_endpoint},token:function(){return b.token_endpoint},
logout:function(){if(!b.end_session_endpoint)throw"Not supported by the OIDC server";return b.end_session_endpoint},checkSessionIframe:function(){if(!b.check_session_iframe)throw"Not supported by the OIDC server";return b.check_session_iframe},register:function(){throw'Redirection to "Register user" page not supported in standard OIDC mode';},userinfo:function(){if(!b.userinfo_endpoint)throw"Not supported by the OIDC server";return b.userinfo_endpoint}}:{authorize:function(){return l()+"/protocol/openid-connect/auth"},
token:function(){return l()+"/protocol/openid-connect/token"},logout:function(){return l()+"/protocol/openid-connect/logout"},checkSessionIframe:function(){var b=l()+"/protocol/openid-connect/login-status-iframe.html";a.iframeVersion&&(b=b+"?version\x3d"+a.iframeVersion);return b},register:function(){return l()+"/protocol/openid-connect/registrations"},userinfo:function(){return l()+"/protocol/openid-connect/userinfo"}}}var y=g(!0),r;d?"string"===typeof d&&(r=d):r="keycloak.json";if(r){var k=new XMLHttpRequest;
k.open("GET",r,!0);k.setRequestHeader("Accept","application/json");k.onreadystatechange=function(){if(4==k.readyState)if(200==k.status||0==k.status&&k.responseText&&k.responseURL.startsWith("file:")){var b=JSON.parse(k.responseText);a.authServerUrl=b["auth-server-url"];a.realm=b.realm;a.clientId=b.resource;c(null);y.setSuccess()}else y.setError()};k.send()}else{if(!d.clientId)throw"clientId missing";a.clientId=d.clientId;if(b=d.oidcProvider)"string"===typeof b?(b="/"==b.charAt(b.length-1)?b+".well-known/openid-configuration":
b+"/.well-known/openid-configuration",k=new XMLHttpRequest,k.open("GET",b,!0),k.setRequestHeader("Accept","application/json"),k.onreadystatechange=function(){if(4==k.readyState)if(200==k.status||0==k.status&&k.responseText&&k.responseURL.startsWith("file:")){var a=JSON.parse(k.responseText);c(a);y.setSuccess()}else y.setError()},k.send()):(c(b),y.setSuccess());else{if(!d.url)for(b=document.getElementsByTagName("script"),r=0;r<b.length;r++)if(b[r].src.match(/.*keycloak\.js/)){d.url=b[r].src.substr(0,
b[r].src.indexOf("/js/keycloak.js"));break}if(!d.realm)throw"realm missing";a.authServerUrl=d.url;a.realm=d.realm;c(null);y.setSuccess()}}return y.promise}function v(b,c,d,r){a.tokenTimeoutHandle&&(clearTimeout(a.tokenTimeoutHandle),a.tokenTimeoutHandle=null);c?(a.refreshToken=c,a.refreshTokenParsed=q(c)):(delete a.refreshToken,delete a.refreshTokenParsed);d?(a.idToken=d,a.idTokenParsed=q(d)):(delete a.idToken,delete a.idTokenParsed);if(b){if(a.token=b,a.tokenParsed=q(b),a.sessionId=a.tokenParsed.session_state,
a.authenticated=!0,a.subject=a.tokenParsed.sub,a.realmAccess=a.tokenParsed.realm_access,a.resourceAccess=a.tokenParsed.resource_access,r&&(a.timeSkew=Math.floor(r/1E3)-a.tokenParsed.iat),null!=a.timeSkew&&(h("[KEYCLOAK] Estimated time difference between browser and server is "+a.timeSkew+" seconds"),a.onTokenExpired))if(b=1E3*(a.tokenParsed.exp-(new Date).getTime()/1E3+a.timeSkew),h("[KEYCLOAK] Token expires in "+Math.round(b/1E3)+" s"),0>=b)a.onTokenExpired();else a.tokenTimeoutHandle=setTimeout(a.onTokenExpired,
b)}else delete a.token,delete a.tokenParsed,delete a.subject,delete a.realmAccess,delete a.resourceAccess,a.authenticated=!1}function q(a){a=a.split(".")[1];a=a.replace("/-/g","+");a=a.replace("/_/g","/");switch(a.length%4){case 0:break;case 2:a+="\x3d\x3d";break;case 3:a+="\x3d";break;default:throw"Invalid token";}a=(a+"\x3d\x3d\x3d").slice(0,a.length+a.length%4);a=a.replace(/-/g,"+").replace(/_/g,"/");a=decodeURIComponent(escape(atob(a)));return a=JSON.parse(a)}function D(){var a=C(36,"0123456789abcdef").split("");
a[14]="4";a[19]="0123456789abcdef".substr(a[19]&3|8,1);a[8]=a[13]=a[18]=a[23]="-";return a.join("")}function c(b){a:{var c;switch(a.flow){case "standard":c=["code","state","session_state"];break;case "implicit":c="access_token token_type id_token state session_state expires_in".split(" ");break;case "hybrid":c=["access_token","id_token","code","state","session_state"]}c.push("error");c.push("error_description");c.push("error_uri");var d=b.indexOf("?"),r=b.indexOf("#"),k,p;"query"===a.responseMode&&
-1!==d?(k=b.substring(0,d),p=t(b.substring(d+1,-1!==r?r:b.length),c),""!==p.paramsString&&(k+="?"+p.paramsString),-1!==r&&(k+=b.substring(r))):"fragment"===a.responseMode&&-1!==r&&(k=b.substring(0,r),p=t(b.substring(r+1),c),""!==p.paramsString&&(k+="#"+p.paramsString));if(p&&p.oauthParams)if("standard"===a.flow||"hybrid"===a.flow){if((p.oauthParams.code||p.oauthParams.error)&&p.oauthParams.state){p.oauthParams.newUrl=k;b=p.oauthParams;break a}}else if("implicit"===a.flow&&(p.oauthParams.access_token||
p.oauthParams.error)&&p.oauthParams.state){p.oauthParams.newUrl=k;b=p.oauthParams;break a}b=void 0}if(b){if(c=x.get(b.state))b.valid=!0,b.redirectUri=c.redirectUri,b.storedNonce=c.nonce,b.prompt=c.prompt,b.pkceCodeVerifier=c.pkceCodeVerifier;return b}}function t(a,c){a=a.split("\x26");for(var b={paramsString:"",oauthParams:{}},d=0;d<a.length;d++){var m=a[d].split("\x3d");-1!==c.indexOf(m[0])?b.oauthParams[m[0]]=m[1]:(""!==b.paramsString&&(b.paramsString+="\x26"),b.paramsString+=a[d])}return b}function g(b){return!b&&
a.useNativePromise?I():J()}function I(){var a={setSuccess:function(b){a.resolve(b)},setError:function(b){a.reject(b)}};a.promise=new Promise(function(b,c){a.resolve=b;a.reject=c});return a}function J(){var a={setSuccess:function(b){a.success=!0;a.result=b;a.successCallback&&a.successCallback(b)},setError:function(b){a.error=!0;a.result=b;a.errorCallback&&a.errorCallback(b)},promise:{success:function(b){a.success?b(a.result):a.error||(a.successCallback=b);return a.promise},error:function(b){a.error?
b(a.result):a.success||(a.errorCallback=b);return a.promise}}};return a}function n(){var b=g(!0);if(!w.enable||w.iframe)return b.setSuccess(),b.promise;var c=document.createElement("iframe");w.iframe=c;c.onload=function(){var c=a.endpoints.authorize();"/"===c.charAt(0)?(c=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),w.iframeOrigin=c):w.iframeOrigin=c.substring(0,c.indexOf("/",8));b.setSuccess()};
var d=a.endpoints.checkSessionIframe();c.setAttribute("src",d);c.setAttribute("title","keycloak-session-iframe");c.style.display="none";document.body.appendChild(c);window.addEventListener("message",function(b){if(b.origin===w.iframeOrigin&&w.iframe.contentWindow===b.source&&("unchanged"==b.data||"changed"==b.data||"error"==b.data)){"unchanged"!=b.data&&a.clearToken();for(var c=w.callbackList.splice(0,w.callbackList.length),d=c.length-1;0<=d;--d){var m=c[d];"error"==b.data?m.setError():m.setSuccess("unchanged"==
b.data)}}},!1);return b.promise}function K(){w.enable&&a.token&&setTimeout(function(){G().success(function(a){a&&K()})},1E3*w.interval)}function G(){var b=g(!0);if(w.iframe&&w.iframeOrigin){var c=a.clientId+" "+(a.sessionId?a.sessionId:"");w.callbackList.push(b);var d=w.iframeOrigin;1==w.callbackList.length&&w.iframe.contentWindow.postMessage(c,d)}else b.setSuccess();return b.promise}function N(b){if(!b||"default"==b)return{login:function(b){window.location.replace(a.createLoginUrl(b));return g(!1).promise},
logout:function(b){window.location.replace(a.createLogoutUrl(b));return g(!1).promise},register:function(b){window.location.replace(a.createRegisterUrl(b));return g(!1).promise},accountManagement:function(){var b=a.createAccountUrl();if("undefined"!==typeof b)window.location.href=b;else throw"Not supported by the OIDC server";return g(!1).promise},redirectUri:function(b,c){1==arguments.length&&(c=!0);return b&&b.redirectUri?b.redirectUri:a.redirectUri?a.redirectUri:location.href}};if("cordova"==b){w.enable=
!1;var d=function(a,b,c){return window.cordova&&window.cordova.InAppBrowser?window.cordova.InAppBrowser.open(a,b,c):window.open(a,b,c)},e=function(a){return a&&a.cordovaOptions?Object.keys(a.cordovaOptions).reduce(function(b,c){b[c]=a.cordovaOptions[c];return b},{}):{}},f=function(a){return Object.keys(a).reduce(function(b,c){b.push(c+"\x3d"+a[c]);return b},[]).join(",")},k=function(a){var b=e(a);b.location="no";a&&"none"==a.prompt&&(b.hidden="yes");return f(b)};return{login:function(b){var m=g(!1),
p=k(b);b=a.createLoginUrl(b);var e=d(b,"_blank",p),f=!1,h=!1;e.addEventListener("loadstart",function(a){0==a.url.indexOf("http://localhost")&&(a=c(a.url),z(a,m),h=!0,e.close(),f=!0)});e.addEventListener("loaderror",function(a){f||(0==a.url.indexOf("http://localhost")?(a=c(a.url),z(a,m),h=!0,e.close(),f=!0):(m.setError(),h=!0,e.close()))});e.addEventListener("exit",function(a){h||m.setError({reason:"closed_by_user"})});return m.promise},logout:function(b){var c=g(!1);b=a.createLogoutUrl(b);var m=d(b,
"_blank","location\x3dno,hidden\x3dyes"),e;m.addEventListener("loadstart",function(a){0==a.url.indexOf("http://localhost")&&m.close()});m.addEventListener("loaderror",function(a){0!=a.url.indexOf("http://localhost")&&(e=!0);m.close()});m.addEventListener("exit",function(b){e?c.setError():(a.clearToken(),c.setSuccess())});return c.promise},register:function(b){var m=g(!1),e=a.createRegisterUrl();b=k(b);var p=d(e,"_blank",b);p.addEventListener("loadstart",function(a){0==a.url.indexOf("http://localhost")&&
(p.close(),a=c(a.url),z(a,m))});return m.promise},accountManagement:function(){var b=a.createAccountUrl();if("undefined"!==typeof b){var c=d(b,"_blank","location\x3dno");c.addEventListener("loadstart",function(a){0==a.url.indexOf("http://localhost")&&c.close()})}else throw"Not supported by the OIDC server";},redirectUri:function(a){return"http://localhost"}}}if("cordova-native"==b)return w.enable=!1,{login:function(b){var d=g(!1);b=a.createLoginUrl(b);universalLinks.subscribe("keycloak",function(a){universalLinks.unsubscribe("keycloak");
window.cordova.plugins.browsertab.close();a=c(a.url);z(a,d)});window.cordova.plugins.browsertab.openUrl(b);return d.promise},logout:function(b){var c=g(!1);b=a.createLogoutUrl(b);universalLinks.subscribe("keycloak",function(b){universalLinks.unsubscribe("keycloak");window.cordova.plugins.browsertab.close();a.clearToken();c.setSuccess()});window.cordova.plugins.browsertab.openUrl(b);return c.promise},register:function(b){var d=g(!1);b=a.createRegisterUrl(b);universalLinks.subscribe("keycloak",function(a){universalLinks.unsubscribe("keycloak");
window.cordova.plugins.browsertab.close();a=c(a.url);z(a,d)});window.cordova.plugins.browsertab.openUrl(b);return d.promise},accountManagement:function(){var b=a.createAccountUrl();if("undefined"!==typeof b)window.cordova.plugins.browsertab.openUrl(b);else throw"Not supported by the OIDC server";},redirectUri:function(b){return b&&b.redirectUri?b.redirectUri:a.redirectUri?a.redirectUri:"http://localhost"}};throw"invalid adapter type: "+b;}function Q(b){return function(){a.enableLogging&&b.apply(console,
Array.prototype.slice.call(arguments))}}if(!(this instanceof F))return new F(d);for(var a=this,A,e=[],x,w={enable:!0,callbackList:[],interval:5},H=document.getElementsByTagName("script"),f=0;f<H.length;f++)-1===H[f].src.indexOf("keycloak.js")&&-1===H[f].src.indexOf("keycloak.min.js")||-1===H[f].src.indexOf("version\x3d")||(a.iframeVersion=H[f].src.substring(H[f].src.indexOf("version\x3d")+8).split("\x26")[0]);var M=!0,h=Q(console.info),B=Q(console.warn);a.init=function(b){function m(){var d=function(b){b||
(e.prompt="none");a.useNativePromise?a.login(e).then(function(){k.setSuccess()}).catch(function(){k.setError()}):a.login(e).success(function(){k.setSuccess()}).error(function(){k.setError()})},m=function(){var b=document.createElement("iframe"),d=a.createLoginUrl({prompt:"none",redirectUri:a.silentCheckSsoRedirectUri});b.setAttribute("src",d);b.setAttribute("title","keycloak-silent-check-sso");b.style.display="none";document.body.appendChild(b);var m=function(a){a.origin===window.location.origin&&
b.contentWindow===a.source&&(a=c(a.data),z(a,k),document.body.removeChild(b),window.removeEventListener("message",m))};window.addEventListener("message",m)},e={};switch(b.onLoad){case "check-sso":w.enable?n().success(function(){G().success(function(b){b?k.setSuccess():a.silentCheckSsoRedirectUri?m():d(!1)}).error(function(){k.setError()})}):a.silentCheckSsoRedirectUri?m():d(!1);break;case "login-required":d(!0);break;default:throw"Invalid value for onLoad";}}a.authenticated=!1;a:{try{x=new O;break a}catch(p){}x=
new P}var e=["default","cordova","cordova-native"];A=b&&-1<e.indexOf(b.adapter)?N(b.adapter):b&&"object"===typeof b.adapter?b.adapter:window.Cordova||window.cordova?N("cordova"):N();if(b){"undefined"!==typeof b.useNonce&&(M=b.useNonce);"undefined"!==typeof b.checkLoginIframe&&(w.enable=b.checkLoginIframe);b.checkLoginIframeInterval&&(w.interval=b.checkLoginIframeInterval);"native"===b.promiseType?a.useNativePromise=!0:(console.warn("[KEYCLOAK] Using legacy promises is deprecated and will be removed in future versions. You can opt in to using native promises by setting `promiseType` to 'native' when initializing Keycloak."),
a.useNativePromise=!1);"login-required"===b.onLoad&&(a.loginRequired=!0);if(b.responseMode)if("query"===b.responseMode||"fragment"===b.responseMode)a.responseMode=b.responseMode;else throw"Invalid value for responseMode";if(b.flow){switch(b.flow){case "standard":a.responseType="code";break;case "implicit":a.responseType="id_token token";break;case "hybrid":a.responseType="code id_token token";break;default:throw"Invalid value for flow";}a.flow=b.flow}null!=b.timeSkew&&(a.timeSkew=b.timeSkew);b.redirectUri&&
(a.redirectUri=b.redirectUri);b.silentCheckSsoRedirectUri&&(a.silentCheckSsoRedirectUri=b.silentCheckSsoRedirectUri);if(b.pkceMethod){if("S256"!==b.pkceMethod)throw"Invalid value for pkceMethod";a.pkceMethod=b.pkceMethod}a.enableLogging="boolean"===typeof b.enableLogging?b.enableLogging:!1}a.responseMode||(a.responseMode="fragment");a.responseType||(a.responseType="code",a.flow="standard");var f=g(!1),k=g(!0);k.promise.success(function(){a.onReady&&a.onReady(a.authenticated);f.setSuccess(a.authenticated)}).error(function(a){f.setError(a)});
e=u(d);e.success(function(){var d=c(window.location.href);d&&window.history.replaceState(window.history.state,null,d.newUrl);if(d&&d.valid)return n().success(function(){z(d,k)}).error(function(a){k.setError()});b?b.token&&b.refreshToken?(v(b.token,b.refreshToken,b.idToken),w.enable?n().success(function(){G().success(function(b){b?(a.onAuthSuccess&&a.onAuthSuccess(),k.setSuccess(),K()):k.setSuccess()}).error(function(){k.setError()})}):a.updateToken(-1).success(function(){a.onAuthSuccess&&a.onAuthSuccess();
k.setSuccess()}).error(function(){a.onAuthError&&a.onAuthError();b.onLoad?m():k.setError()})):b.onLoad?m():k.setSuccess():k.setSuccess()});e.error(function(){f.setError()});return f.promise};a.login=function(a){return A.login(a)};a.createLoginUrl=function(b){var c=D(),d=D(),e=A.redirectUri(b),g={state:c,nonce:d,redirectUri:encodeURIComponent(e)};b&&b.prompt&&(g.prompt=b.prompt);var f;f=b&&"register"==b.action?a.endpoints.register():a.endpoints.authorize();var h;h=b&&b.scope?-1!=b.scope.indexOf("openid")?
b.scope:"openid "+b.scope:"openid";c=f+"?client_id\x3d"+encodeURIComponent(a.clientId)+"\x26redirect_uri\x3d"+encodeURIComponent(e)+"\x26state\x3d"+encodeURIComponent(c)+"\x26response_mode\x3d"+encodeURIComponent(a.responseMode)+"\x26response_type\x3d"+encodeURIComponent(a.responseType)+"\x26scope\x3d"+encodeURIComponent(h);M&&(c=c+"\x26nonce\x3d"+encodeURIComponent(d));b&&b.prompt&&(c+="\x26prompt\x3d"+encodeURIComponent(b.prompt));b&&b.maxAge&&(c+="\x26max_age\x3d"+encodeURIComponent(b.maxAge));
b&&b.loginHint&&(c+="\x26login_hint\x3d"+encodeURIComponent(b.loginHint));b&&b.idpHint&&(c+="\x26kc_idp_hint\x3d"+encodeURIComponent(b.idpHint));b&&b.locale&&(c+="\x26ui_locales\x3d"+encodeURIComponent(b.locale));if(a.pkceMethod){b=C(96,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");g.pkceCodeVerifier=b;a:switch(a.pkceMethod){case "S256":b=new Uint8Array(E.arrayBuffer(b));b=L.fromByteArray(b).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"");break a;default:throw"Invalid value for pkceMethod";
}c=c+("\x26code_challenge\x3d"+b)+("\x26code_challenge_method\x3d"+a.pkceMethod)}x.add(g);return c};a.logout=function(a){return A.logout(a)};a.createLogoutUrl=function(b){return a.endpoints.logout()+"?redirect_uri\x3d"+encodeURIComponent(A.redirectUri(b,!1))};a.register=function(a){return A.register(a)};a.createRegisterUrl=function(b){b||(b={});b.action="register";return a.createLoginUrl(b)};a.createAccountUrl=function(b){var c=l(),d=void 0;"undefined"!==typeof c&&(d=c+"/account?referrer\x3d"+encodeURIComponent(a.clientId)+
"\x26referrer_uri\x3d"+encodeURIComponent(A.redirectUri(b)));return d};a.accountManagement=function(){return A.accountManagement()};a.hasRealmRole=function(b){var c=a.realmAccess;return!!c&&0<=c.roles.indexOf(b)};a.hasResourceRole=function(b,c){if(!a.resourceAccess)return!1;c=a.resourceAccess[c||a.clientId];return!!c&&0<=c.roles.indexOf(b)};a.loadUserProfile=function(){var b=l()+"/account",c=new XMLHttpRequest;c.open("GET",b,!0);c.setRequestHeader("Accept","application/json");c.setRequestHeader("Authorization",
"bearer "+a.token);var d=g(!1);c.onreadystatechange=function(){4==c.readyState&&(200==c.status?(a.profile=JSON.parse(c.responseText),d.setSuccess(a.profile)):d.setError())};c.send();return d.promise};a.loadUserInfo=function(){var b=a.endpoints.userinfo(),c=new XMLHttpRequest;c.open("GET",b,!0);c.setRequestHeader("Accept","application/json");c.setRequestHeader("Authorization","bearer "+a.token);var d=g(!1);c.onreadystatechange=function(){4==c.readyState&&(200==c.status?(a.userInfo=JSON.parse(c.responseText),
d.setSuccess(a.userInfo)):d.setError())};c.send();return d.promise};a.isTokenExpired=function(b){if(!a.tokenParsed||!a.refreshToken&&"implicit"!=a.flow)throw"Not authenticated";if(null==a.timeSkew)return h("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),!0;var c=a.tokenParsed.exp-Math.ceil((new Date).getTime()/1E3)+a.timeSkew;if(b){if(isNaN(b))throw"Invalid minValidity";c-=b}return 0>c};a.updateToken=function(b){var c=g(!1);if(!a.refreshToken)return c.setError(),c.promise;
b=b||5;var d=function(){var d=!1;if(-1==b)d=!0,h("[KEYCLOAK] Refreshing token: forced refresh");else if(!a.tokenParsed||a.isTokenExpired(b))d=!0,h("[KEYCLOAK] Refreshing token: token expired");if(d){var d="grant_type\x3drefresh_token\x26refresh_token\x3d"+a.refreshToken,g=a.endpoints.token();e.push(c);if(1==e.length){var f=new XMLHttpRequest;f.open("POST",g,!0);f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.withCredentials=!0;var d=d+("\x26client_id\x3d"+encodeURIComponent(a.clientId)),
m=(new Date).getTime();f.onreadystatechange=function(){if(4==f.readyState)if(200==f.status){h("[KEYCLOAK] Token refreshed");m=(m+(new Date).getTime())/2;var b=JSON.parse(f.responseText);v(b.access_token,b.refresh_token,b.id_token,m);a.onAuthRefreshSuccess&&a.onAuthRefreshSuccess();for(b=e.pop();null!=b;b=e.pop())b.setSuccess(!0)}else for(B("[KEYCLOAK] Failed to refresh token"),400==f.status&&a.clearToken(),a.onAuthRefreshError&&a.onAuthRefreshError(),b=e.pop();null!=b;b=e.pop())b.setError(!0)};f.send(d)}}else c.setSuccess(!1)};
w.enable?G().success(function(){d()}).error(function(){c.setError()}):d();return c.promise};a.clearToken=function(){a.token&&(v(null,null,null),a.onAuthLogout&&a.onAuthLogout(),a.loginRequired&&a.login())};var O=function(){function a(){for(var a=(new Date).getTime(),b=0;b<localStorage.length;b++){var c=localStorage.key(b);if(c&&0==c.indexOf("kc-callback-")){var d=localStorage.getItem(c);if(d)try{var e=JSON.parse(d).expires;(!e||e<a)&&localStorage.removeItem(c)}catch(R){localStorage.removeItem(c)}}}}
if(!(this instanceof O))return new O;localStorage.setItem("kc-test","test");localStorage.removeItem("kc-test");this.get=function(b){if(b){b="kc-callback-"+b;var c=localStorage.getItem(b);c&&(localStorage.removeItem(b),c=JSON.parse(c));a();return c}};this.add=function(b){a();var c="kc-callback-"+b.state;b.expires=(new Date).getTime()+36E5;localStorage.setItem(c,JSON.stringify(b))}},P=function(){if(!(this instanceof P))return new P;this.get=function(b){if(b){var d;a:{d="kc-callback-"+b+"\x3d";for(var e=
document.cookie.split(";"),f=0;f<e.length;f++){for(var g=e[f];" "==g.charAt(0);)g=g.substring(1);if(0==g.indexOf(d)){d=g.substring(d.length,g.length);break a}}d=""}c("kc-callback-"+b,"",a(-100));if(d)return JSON.parse(d)}};this.add=function(b){c("kc-callback-"+b.state,JSON.stringify(b),a(60))};this.removeItem=function(b){c(b,"",a(-100))};var a=function(a){var b=new Date;b.setTime(b.getTime()+6E4*a);return b},c=function(a,b,c){a=a+"\x3d"+b+"; expires\x3d"+c.toUTCString()+"; ";document.cookie=a}}}return F});
;
//# sourceMappingURL=scripts.js.map
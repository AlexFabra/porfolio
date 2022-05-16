import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

const auth: AuthResponse = { ok: true, id: 1, name: 'Alejandro Fabra', token: 123456, msg: 'benvingut' };
const alterEgoAuth: AuthResponse = { ok: true, id: 1, name: 'Alejandrovi Dividibidi', token: 654321, msg: 'benvingut' };



@Injectable()
export class AuthSimulatorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleRequests(req, next);
    }

    handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
        const { url, method } = req;
        switch (true) {
            case url.endsWith('/auth') && method === 'POST':
                return authenticate(req);
                break;
            case url.endsWith('/renew') && method === 'GET':
                return renewToken();
                break;
            default:
                return next.handle(req);
        }
    }
}

function authenticate(req: HttpRequest<any>) {

    //simulem usuari normal per defecte:
    let authentication: Observable<HttpResponse<any>> = ok(auth);

    //simulem altre usuari donades unes condicions:
    if (req.body.email == 'alejandrovi@gmail.com') { authentication = ok(alterEgoAuth); }

    //obtenim el token de l'usuari autenticat i ho guardem al localStorage:
    authentication.subscribe((authData) => {
        localStorage.setItem('token', authData.body.token);
    });

    return authentication;
}

function renewToken() {
    return (localStorage.getItem('token') == alterEgoAuth.token.toString()) ? ok(alterEgoAuth) : ok(auth);
}

function ok(body: any) {
    return of(new HttpResponse({ status: 200, body }))
}

function error(message: any) {
    return throwError({ error: { message } });
}

function unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorised' } });
}


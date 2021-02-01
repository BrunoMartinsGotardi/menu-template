import { Injectable } from '@angular/core';
import { AngularFireAuthGuard, AuthPipe, AuthPipeGenerator, loggedIn } from '@angular/fire/auth-guard';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CustomAngularFireAuthGuard implements CanActivate {

    constructor(private router: Router, private firebaseService: FirebaseService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const currentTenant = this.firebaseService.currentStorageTenant();
        let usuarioLogado = false;
        if (currentTenant) {
            const authFirebaseService = this.firebaseService.getTenantAuthFirebase(currentTenant);
            return authFirebaseService.user.pipe(map(user => {
                return user != null
            }))
        }

        if (!usuarioLogado) {
            this.router.navigate(['login'])
        }

        return of(false);
    }
}
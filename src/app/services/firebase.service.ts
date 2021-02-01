
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { FirebaseOptions, FIREBASE_OPTIONS } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable()
export class FirebaseService {

  constructor(@Inject(FIREBASE_OPTIONS) private firebaseOptions: FirebaseOptions,
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone) {
  }

  getTenantAuthFirebase(tenant) {
    const firebaseOptions = this.firebaseOptions
    const firebaseAppName = tenant // user tenant id as app name for this instance
    const platformId = this.platformId
    const zone = this.zone
    const emulator = null
    const settings = null
    const tenantId = tenant
    const languageCode = null
    const deviceLanguage = null
    const persistence = null

    return new AngularFireAuth
      (firebaseOptions, firebaseAppName, platformId, zone,
        emulator, settings, tenantId, languageCode, deviceLanguage, persistence);
  }

  currentStorageTenant() {
    const userString = localStorage.getItem("user");
    if(userString) {
      return JSON.parse(userString).tenantId
    }
  }
  
  async logarConta(email: string, senha: string, tenantId: string) {
    const angularFireAuth = this.getTenantAuthFirebase(tenantId)
    const resposta = await angularFireAuth.signInWithEmailAndPassword(email, senha)

    if (resposta) {
      localStorage.setItem('user', JSON.stringify(resposta.user))
      return true;
    } else {
      return false;
    }
  }

  estaLogado() {
    const angularFireAuth = this.getTenantAuthFirebase(this.currentStorageTenant())
    return new Promise((resolve, reject) => {
      angularFireAuth.authState.subscribe(user => {
        if (user) {
          resolve(user);
        } else {
          reject(user);
        }
      }, err => reject(err))
    })
  }

  deslogar() {
    const angularFireAuth = this.getTenantAuthFirebase(this.currentStorageTenant())
    return angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      console.log('usuario removido !')
    })
  }
  
  authState() {
    const angularFireAuth = this.getTenantAuthFirebase(this.currentStorageTenant())
    return angularFireAuth.authState
  }
}

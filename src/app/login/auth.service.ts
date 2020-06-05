import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userName$:Observable<firebase.User>;

  constructor( private afauth:AngularFireAuth) {
    this.userName$ = afauth.authState;
  }

  public login(){
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  public logout(){
    this.afauth.auth.signOut();
  }

}
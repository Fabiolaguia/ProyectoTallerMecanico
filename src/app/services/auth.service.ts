import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {User} from "../clases/user";
import {UsuarioService} from "./usuario.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public  afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public usuarioService: UsuarioService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        //JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.usuarioService.getUsuario(result!.user!.uid);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async SignUp(email: string, password: string) {
    console.log(email);
    console.log(password);
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result!.user!.uid;

  }

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    let local = localStorage.getItem('usuario');
    let user = local === null ? null : JSON.parse(local);
    return (user !== null) ? true : false;
  }

  SetUserData(user:any) {
    if(user !== null) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: User = {
        name: user.name,
        lastName: user.lastName,
        uid: user.uid,
        role: user.role,
        phone: user.phone,
        address: user.address,
        ci: user.ci
      }
      return userRef.set(userData, {
        merge: true
      })
    }else{
      return null;
    }
  }

  // Sign out
  async SignOut() {
      await this.afAuth.signOut();
      localStorage.removeItem('usuario');
      this.router.navigate(['home']);
  }
}

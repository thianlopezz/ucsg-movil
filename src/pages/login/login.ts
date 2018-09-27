import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { SessionProvider } from '../../providers/session/session';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: any = {};

  error;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private sessionProvider: SessionProvider,
    private loginProvider: LoginProvider) {

  }

  ionViewWillEnter() {
    if (this.sessionProvider.getLogin()) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  login() {

    this.error = undefined;

    if (!this.model.usuario || this.model.usuario.trim().length === 0
      || !this.model.contrasena || this.model.contrasena.trim().length === 0) {

      this.error = 'Completa todos los campos para iniciar sesión';
      return;
    }

    let loading = this.loadingCtrl.create({
      content: 'Iniciando sesión...'
    });

    loading.present();

    this.loginProvider.login(this.model)
      .then(result => {

        loading.dismiss();

        if (result.success) {
          this.navCtrl.setRoot(HomePage);
        } else {
          this.error = result.mensaje;
        }
      });
  }
}

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionProvider {

  constructor(public http: Http) {

  }

  login(usuario: any) {

    localStorage.setItem('catoler', JSON.stringify(usuario));
  }

  getLogin() {

    return JSON.parse(localStorage.getItem('catoler'));
  }

  logout() {

    localStorage.removeItem('catoler');
  }

  getImagenSesion() {

    const catoler = this.getLogin();

    if (catoler && catoler.fbPicture) {

      return this.http.get(catoler.fbPicture).map((response: Response) => response.json());
    }
  }

}


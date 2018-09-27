import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tereas',
  templateUrl: 'tereas.html',
})
export class TereasPage {

  tareas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tareas = navParams.get('tareas');
  }

  ionViewDidLoad() {
  }  

}

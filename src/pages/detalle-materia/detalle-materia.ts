import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

@Component({
  selector: 'page-detalle-materia',
  templateUrl: 'detalle-materia.html',
})
export class DetalleMateriaPage {

  materia: any = {};
  fechaFinMoment = moment({ d: 30, M: 8, y: 2018 });
  fechaFin = this.fechaFinMoment.format('YYYY-MM-DD');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materia = navParams.get('materia');
    this.getDias();
  }

  ionViewDidLoad() {
  }

  getDias() {

    let dictadas = this.materia.dictadas;
    let asistidas = this.materia.asistidas;

    let clases = 0;    

    let fechaIteracion = moment();
    
    let fechaAux = this.fechaFin.split('-');

    this.fechaFinMoment = moment({ d: Number(fechaAux[2]), M: Number(fechaAux[1]) - 1, y: Number(fechaAux[0]) });

    while (fechaIteracion <= this.fechaFinMoment) {

      if (fechaIteracion.format('ddd').toLocaleUpperCase() === this.materia.horario[0].dia) {
        clases++;
      }

      if (fechaIteracion.format('ddd').toLocaleUpperCase() === this.materia.horario[1].dia) {
        clases++;
      }

      fechaIteracion.add(1, 'days');
    }

    let iteradorClases = clases;
    let horasRestantes = clases * 1.5;

    while (((asistidas + (iteradorClases * 1.5)) / (dictadas + horasRestantes)) * 100 > 60) {
      iteradorClases--;
    }

    this.materia.faltar = (clases - iteradorClases - 1);
  }

}

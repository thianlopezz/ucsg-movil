import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  materias = [];
  materiasFiltradas = [];

  fecha = moment();

  dias = [
    {id: 'SUN', dia:'Domingo'},
    { id: 'MON', dia: 'Lunes' },
    { id: 'TUE', dia: 'Martes' },
    { id: 'WED', dia: 'Miércoles' },
    { id: 'THU', dia: 'Jueves' },
    { id: 'FRI', dia: 'Viernes' },
    { id: 'SAT', dia: 'Sábado' }
  ];

  dia: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materias = navParams.get('materias');
  }

  ionViewDidLoad() {

    const dia = this.fecha.format('ddd').toLocaleUpperCase();
    this.filtrarMaterias(dia);
    
    this.dia = this.dias.find(_dia => _dia.id === dia);
  }

  filtrarMaterias(dia) {
    this.materiasFiltradas = this.materias.filter(materia => {
      return materia.horario.find(horario => horario.dia === dia);
    });
  }

  restaFecha(){

    this.fecha.subtract(1, 'days');

    const dia = this.fecha.format('ddd').toLocaleUpperCase();
    this.filtrarMaterias(dia);

    this.dia = this.dias.find(_dia => _dia.id === dia);
  }

  sumaFecha() {
    
    this.fecha.add(1, 'days');

    const dia = this.fecha.format('ddd').toLocaleUpperCase();
    this.filtrarMaterias(dia);

    this.dia = this.dias.find(_dia => _dia.id === dia);
  }

}

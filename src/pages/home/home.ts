import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { MateriasProvider } from '../../providers/materias/materias';
import { TareasProvider } from '../../providers/tareas/tareas';

import * as moment from 'moment';
import { HorarioPage } from '../horario/horario';
import { TereasPage } from '../tereas/tereas';
import { DetalleMateriaPage } from '../detalle-materia/detalle-materia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario;
  materias = [];
  tareas = [];

  contadorClasesHoy = 0;

  constructor(public navCtrl: NavController,
    private sessionProvider: SessionProvider,
    private materiasProvider: MateriasProvider,
    private tareasProvider: TareasProvider) {

  }

  ionViewDidLoad() {
    this.usuario = this.sessionProvider.getLogin();
    this.getMaterias();
    this.getTareas();
  }

  getMaterias() {
    this.materiasProvider.getMaterias()
      .then(materias => {

        this.usuario.materias.forEach(materia => {

          const encontrada = materias.find(x => x.id === materia.id);
          encontrada.asistidas = materia.asistidas;
          encontrada.dictadas = materia.dictadas;
          encontrada.parcial1 = materia.parcial1;
          encontrada.parcial2 = materia.parcial2;
          this.materias.push(encontrada);

          // CONTADOR DE MATERIAS PARA HOY
          const dia = moment().format('ddd').toLocaleUpperCase();
          const tieneClasesHoy = encontrada.horario.find(horario => horario.dia === dia);
          if (tieneClasesHoy) {
            this.contadorClasesHoy += 1
          }
        });
      })
  }

  getTareas() {
    this.tareasProvider.getTareas()
      .then(tareas => {
        this.usuario.tareas.forEach(tarea => {
          const encontrada = tareas.find(x => x.id === tarea);
          this.tareas.push(encontrada);
        });
      })
  }
  
  goHorario(){
    this.navCtrl.push(HorarioPage, {
      materias: this.materias
    });
  }

  goTareas() {
    this.navCtrl.push(TereasPage, {
      tareas: this.tareas
    });
  }

  goMateria(materia){
    this.navCtrl.push(DetalleMateriaPage, {
      materia
    });
  }

}

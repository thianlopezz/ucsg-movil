import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { SessionProvider } from '../session/session';

@Injectable()
export class LoginProvider {

  constructor(public http: Http,
    private storage: Storage,
    private sessionProvider: SessionProvider) {
    this.setUsuarios();
  }

  login(model: any) {

    return this.storage.get('usuarios').then((usuarios) => {
      const usuario = usuarios.find(x => x.correo === model.usuario && x.contrasena === model.contrasena);
      if (usuario) {
        this.sessionProvider.login(usuario);
        return { success: true, data: usuario, mensaje: undefined };
      } else {
        return { success: false, data: undefined, mensaje: 'Usuario o contraseña incorrecta.' };
      }
    });
  }

  setUsuarios() {

    const usuarios = [
      {
        id: 1,
        nombre: 'Andrea Alvia',
        correo: 'andrea.alvia@cu.ucsg.edu.ec',
        contrasena: 'password',
        tareas: [1],
        materias: [
          { id: 1, parcial1: 7.8, parcial2: 9, dictadas: 10, asistidas: 6 },
          { id: 2, parcial1: 9.8, parcial2: 8, dictadas: 10, asistidas: 3 },
          { id: 3, parcial1: 7, parcial2: 7, dictadas: 10, asistidas: 10 },
          { id: 4, parcial1: 5.8, parcial2: 10, dictadas: 7.5, asistidas: 6 }
        ]
      },
      {
        id: 2,
        nombre: 'Juan Piguave',
        correo: 'juan.piguave@cu.ucsg.edu.ec',
        contrasena: 'password',
        tareas: [1, 2],
        materias: [
          { id: 1, parcial1: 7.8, parcial2: 7, dictadas: 10, asistidas: 10 },
          { id: 2, parcial1: 7, parcial2: 9, dictadas: 10, asistidas: 6 },
          { id: 3, parcial1: 5.8, parcial2: 8, dictadas: 6, asistidas: 6 },
          { id: 4, parcial1: 5.8, parcial2: 10, dictadas: 7.5, asistidas: 6 },
          { id: 5, parcial1: 9.8, dictadas: 10, asistidas: 3 },
          { id: 6, parcial1: 9.8, parcial2: 8, dictadas: 10, asistidas: 3 }
        ]
      }
    ];

    const tareas = [
      {
        id: 1,
        materia: 'Evaluación de proyectos de software',
        descripcion: 'Presentar tutoría del segundo parcial.'
      },
      {
        id: 2,
        materia: 'Base de datos II',
        descripcion: 'Ingresar a la tutoría virtual y responder las preguntas del cuestionario.'
      }
    ];

    const materias = [
      {
        id: 3,
        materia: 'Metodología de la investigación',
        docente: 'Adela Zurita Fabre',
        horario: [
          { dia: 'TUE', inicio: '07:00', fin: '08:30' },
          { dia: 'THU', inicio: '07:00', fin: '08:30' },
        ]
      },
      {
        id: 1,
        materia: 'Evaluación de proyectos de software',
        docente: 'Lenín Freire',
        horario: [
          { dia: 'MON', inicio: '17:30', fin: '19:00' },
          { dia: 'WED', inicio: '17:30', fin: '19:00' }
        ]
      },
      {
        id: 2,
        materia: 'Base de datos II',
        docente: 'Marcos Xavier Miranda',
        horario: [
          { dia: 'TUE', inicio: '19:00', fin: '20:30' },
          { dia: 'THU', inicio: '19:00', fin: '20:30' },
        ]
      },
      {
        id: 4,
        materia: 'Métodos numéricos',
        docente: 'Galo Cornejo',
        horario: [
          { dia: 'TUE', inicio: '20:30', fin: '22:00' },
          { dia: 'THU', inicio: '20:30', fin: '22:00' },
        ]
      },
      {
        id: 5,
        materia: 'Progrmación móvil',
        docente: 'Roberto Sánchez',
        horario: [
          { dia: 'MON', inicio: '20:30', fin: '22:00' },
          { dia: 'WED', inicio: '20:30', fin: '22:00' },
        ]
      }
    ]

    this.storage.set('usuarios', usuarios);
    this.storage.set('materias', materias);
    this.storage.set('tareas', tareas);
  }
}

import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class TareasProvider {

  constructor(private storage: Storage) {
  }

  getTareas() {
    return this.storage.get('tareas').then(tareas => {
      return tareas;
    });
  }

}

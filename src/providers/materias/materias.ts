import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class MateriasProvider {

  constructor(private storage: Storage) {
  }

  getMaterias() {
    return this.storage.get('materias').then(materias => materias);
  }

}

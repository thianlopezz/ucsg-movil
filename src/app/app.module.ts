import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';

import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { SessionProvider } from '../providers/session/session';
import { HttpModule } from '@angular/http';
import { UsuarioPage } from '../pages/usuario/usuario';
import { MateriasProvider } from '../providers/materias/materias';
import { TareasProvider } from '../providers/tareas/tareas';
import { HorarioPage } from '../pages/horario/horario';
import { TereasPage } from '../pages/tereas/tereas';
import { DetalleMateriaPage } from '../pages/detalle-materia/detalle-materia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UsuarioPage,
    HorarioPage,
    TereasPage,
    DetalleMateriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UsuarioPage,
    HorarioPage,
    TereasPage,
    DetalleMateriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    SessionProvider,
    MateriasProvider,
    TareasProvider
  ]
})
export class AppModule { }

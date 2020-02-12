// Modulos
import { PagesModules } from './pages/pages.module';

// Rutas
import { APP_ROUTES } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { ServiceModule } from './services/service.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { SharedModule } from './shared/shared.module';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule } from '../../node_modules/@angular/forms';
// import { SettingsService } from './services/service.index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // PagesComponent,
    RegisterComponent
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModules,
    SharedModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

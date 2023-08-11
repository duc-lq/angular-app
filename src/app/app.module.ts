import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './alert/successAlert/successAlert.component';
import { WarningAlertComponent } from './alert/warningAlert/warningAlert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // FormsModule for Two-way-binding to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

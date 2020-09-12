import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { GetUserPermissionComponent } from './component/get-user-permission/get-user-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    GetUserPermissionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

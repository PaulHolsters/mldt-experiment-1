import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
import { CardComponent } from './card/card.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ButtonComponent } from './button/button.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import { LogoComponent } from './logo/logo.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AppTemplateComponent } from './templates/app-template/app-template.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomComponentComponent,
    ButtonComponent,
    LogoComponent,
    MenubarComponent,
    AppTemplateComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import { LogoComponent } from './components/logo/logo.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AppTemplateComponent } from './templates/app-template/app-template.component';
import { ContainerComponent } from './components/container/container.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    LogoComponent,
    MenubarComponent,
    AppTemplateComponent,
    ContainerComponent,
    BlockComponent
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

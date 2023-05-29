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
import { ImageComponent } from './components/image/image.component';
import {ImageModule} from "primeng/image";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Image2Component } from './components/image2/image2.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { InputNumberComponent } from './components/form/input-number/input-number.component';
import {FormsModule} from "@angular/forms";
import { LabelComponent } from './components/form/label/label.component';
import { TextComponent } from './components/text/text.component';
import { DataComponent } from './components/data/data.component';
import { NumberComponent } from './components/number/number.component';
import { DateComponent } from './components/form/date/date.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import {KeyFilterModule} from "primeng/keyfilter";
import {InputNumberModule} from "primeng/inputnumber";
import {FormcontrolComponent} from "./components/form/formcontrol/formcontrol.component";
import {RadioButtonComponent} from "./components/form/radio-button/radio-button.component";
import {RadioButtonModule} from "primeng/radiobutton";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    LogoComponent,
    MenubarComponent,
    AppTemplateComponent,
    ContainerComponent,
    BlockComponent,
    ImageComponent,
    ToolbarComponent,
    Image2Component,
    AnchorComponent,
    InputTextComponent,
    InputNumberComponent,
    LabelComponent,
    TextComponent,
    DataComponent,
    NumberComponent,
    DateComponent,
    FormComponent,
    FormcontrolComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    KeyFilterModule,
    InputNumberModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

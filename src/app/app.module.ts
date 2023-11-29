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
import {WrapperComponent} from "./components/wrapper/wrapper.component";
import {MultiselectComponent} from "./components/form/multiselect/multiselect.component";
import {PicklistComponent} from "./components/form/picklist/picklist.component";
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TableComponent } from './components/table/table.component';
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import { DialogComponent } from './components/dialog/dialog.component';
import { IconComponent } from './components/icon/icon.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {PaginatorModule} from "primeng/paginator";
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmationService, MessageService} from "primeng/api";

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
    RadioButtonComponent,
    WrapperComponent,
    MultiselectComponent,
    PicklistComponent,
    TableComponent,
    DialogComponent,
    IconComponent,
    PaginatorComponent,
    ConfirmPopupComponent,
    ContainerComponent
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
        RadioButtonModule,
        MultiSelectModule,
        BrowserAnimationsModule,
        TableModule,
        DialogModule,
        PaginatorModule,
        ConfirmPopupModule
    ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

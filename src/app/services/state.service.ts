import {Injectable} from '@angular/core';
import {ConfigService} from "./config.service";
import {ComponentType} from "../enums/componentTypes.enum";
import {Table} from "../componentclasses/Table";
import {Container} from "../componentclasses/Container";
import {Form} from "../componentclasses/Form";
import {Dialog} from "../componentclasses/Dialog";
import {Button} from "../componentclasses/Button";
import {Label} from "../componentclasses/Label";
import {TextInput} from "../componentclasses/TextInput";
import {FormControl} from "../componentclasses/FormControl";
import {Icon} from "../componentclasses/Icon";
import {Paginator} from "../componentclasses/Paginator";
import {ConfirmPopup} from "../componentclasses/ConfirmPopup";
@Injectable({
  providedIn: 'root'
})
export class StateService {
  /*
  * De state service houdt de waarde van elke render property van elke component bij in een map.
  * Deze service kan je dus gebruiken om op elk moment de waarde van een willekeurige render property van een willekeurige component
  * op te vragen en dan bijvoorbeeld te gebruiken in een custom function (user defined function).
  *
  * Je zou in de verleiding kunnen komen om te denken ah dan kan ik de data van een bepaalde component altijd vinden door de relevante properties
  * hier op te vragen. Dat is echter een vergissing. Een datamodel bezit inderdaad ook de actuele data horende bij een component
  * maar die data staat los van rendering omdat deze datamodellen niet gekoppeld zijn aan een specifieke render property. Data uit de datamodellen
  * zou je echter ook kunnen gebruiken in custom functions. M.a.w. de gebruiker kan hier kiezen wat hij het meest interessant vindt. Voorlopig echter is het zo dat
  * niet alle data in een component (en dus in de state service map) ook in de datamodellen zit. Als je bv. een tabel zou filteren, dan zal dit de
  * currentDataList property wijzigen maar deze wijziging wordt niet doorgetrokken naar het client datamodel horende bij deze table component.
  * De reden hier voor is eenvoudig. De filtering heeft geen consequenties voor queries of mutations. Het client datamodel bestaat juist hierrond: queries en mutations.
  *
  * todo je zou natuurlijk kunnen opwerpen dat je in een tabel een filtering zou kunnen doen om dan vervolgens op een delete knop te klikken die
  *      ervoor zorgt dat de gefilterde records verwijderd worden in de backend (mutation). Als tegenargument zou ik kunnen zeggen:
  *       Dat is iets dat de component beslist. Als dit een functionaliteit is die de component wil aanbieden dan moeten deze frontend
  *       wijzigingen in de updateData method komen.
  * */
  private componentData:{name:string,properties:Map<string,any>}[] = []
  // todo werk any weg
  constructor(private configService:ConfigService) {
  }
  public getProperties(type:ComponentType){
    switch (type) {
      case ComponentType.Table:
        return Table.getProperties()
      case ComponentType.Container:
        return Container.getProperties()
      case ComponentType.Form:
        return Form.getProperties()
      case ComponentType.Dialog:
        return Dialog.getProperties()
      case ComponentType.Button:
        return Button.getProperties()
      case ComponentType.Label:
        return Label.getProperties()
      case ComponentType.TextInput:
        return TextInput.getProperties()
      case ComponentType.FormControl:
        return FormControl.getProperties()
      case ComponentType.Icon:
        return Icon.getProperties()
      case ComponentType.Paginator:
        return Paginator.getProperties()
      case ComponentType.ConfirmPopup:
        return ConfirmPopup.getProperties()
      default:
        throw new Error('Er bestaat geen component van het type '+type)
    }
  }
  private createMap(name:string):Map<string,any>{
    if(name !== 'content-container'){
      let compModel  = this.configService.getConfigFromRoot(name)
      if(compModel)
      return this.getProperties(compModel.type)
      throw new Error('Er bestaat geen component met deze naam '+name)
    } else return this.getProperties(ComponentType.Container)
  }
  public syncData(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    let compModel  = this.configService.getConfigFromRoot(name)
    if(compModel){
      const obj = this.componentData.find(obj=>{
        return obj.name===name
      })
      if(!obj){
        const newObj = {name:name,properties:this.createMap(name)}
        this.componentData.push(newObj)
      }
      this.updateMap(name,data)
    }
  }
  public getValue(name:string,propName:string):any{
    return this.componentData.find(c=>{
      return c.name === name
    })?.properties.get(propName)
  }
  private updateMap(name:string,data:{key:string,value:any}|{key:string,value:any}[]){
    const obj = this.componentData.find(cd=>{
      return cd.name===name
    })
    if(data instanceof Array){
      data.forEach(data=>{
        if(obj)
        obj.properties.set(data.key,data.value)
      })
    } else{
      if(obj)
        obj.properties.set(data.key,data.value)
    }
  }
}

import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TriggerType} from "../../../enums/triggerTypes.enum";
import {Component as AbstractComponent} from "../../Component";
import {PropertyName} from "../../../enums/PropertyNameTypes.enum";
import {ComponentModel} from "../../../design-dimensions/ComponentModel";

@Component({
  selector: 'm-table-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends AbstractComponent implements OnInit,AfterViewInit {
  @Input() component: ComponentModel | undefined

  ngOnInit(): void {
    this.name = this.component?.name ?? ''
    this.props = TableFooter.getProperties()
    const classname = this.element?.nativeElement?.parentElement?.className
    this.props.forEach((v, k) => {
      this.storeService.bindToStateProperty(this.name, k)?.subscribe(res => {
        // als de key niet bestaat wordt deze bijgemaakt hou daar rekening mee!
        this.setPropValue(k, res)
        switch (k) {
          case PropertyName.padding:
            // todo simplify
            const padding = this.stylesService.getPadding(this.getPropValue(k))
            if (classname && classname.search('p-datatable-footer') !== -1 && padding) {
              const kv = Object.entries(padding).find(([k, v]) => {
                return v === true
              })
              if (kv && kv[0]) this.element?.nativeElement?.parentElement?.classList.add(kv[0])
            }
        }
      })
    })
    this.eventsService.triggerEvent(TriggerType.ComponentReady, this.name)
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }

}

import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Admin2aComponent } from './admin2a.component';
import { Admin2bComponent } from './admin2b.component';
@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private viewContentRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const compFactoryA = this.cfr.resolveComponentFactory(Admin2aComponent);
    const compFactoryB = this.cfr.resolveComponentFactory(Admin2bComponent);
    this.viewContentRef.createComponent(compFactoryA);
    this.viewContentRef.createComponent(compFactoryB);
  }
}

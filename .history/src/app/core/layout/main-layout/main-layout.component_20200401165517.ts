import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'my-org-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}
  async gethome() {
    this.viewContainerRef.clear();
    const { HomeComponent } = await import('../home/home.component');
    this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(HomeComponent));
  }
  async getadmin() {
    this.viewContainerRef.clear();
    const { AdminComponent } = await import('../admin/admin.component');
    this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(AdminComponent));
  }
}

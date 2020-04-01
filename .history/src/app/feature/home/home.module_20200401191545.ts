import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NumberSuffixPipe } from '../number-suffix.pipe';

@NgModule({
  declarations: [HomeComponent, NumberSuffixPipe],
  imports: [CommonModule, MatFormFieldModule, HomeRoutingModule]
})
export class HomeModule {}

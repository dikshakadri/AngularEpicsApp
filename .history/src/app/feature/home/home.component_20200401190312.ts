import { Component, OnInit } from '@angular/core';
import { NumberSuffixPipe } from '../../number-suffix.pipe';
@Component({
  selector: 'my-org-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputValue: any;
  constructor() {}

  ngOnInit(): void {}
}

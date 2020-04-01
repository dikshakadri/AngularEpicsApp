import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-org-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputValue: any;
  constructor() {}

  ngOnInit(): void {}

  onKey(event: any) {
    this.inputValue = event.target.value;
  }
}

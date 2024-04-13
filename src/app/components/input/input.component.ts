import { Component, Input, OnInit } from '@angular/core';
import { IonInput, IonLabel, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, IonItem],
})
export class InputComponent  implements OnInit {

  @Input() type: string = '';
  @Input() placeholder: string = '';
  constructor() { }

  ngOnInit() {}

}

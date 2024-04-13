import { Component, OnInit, Input } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class ButtonComponent  implements OnInit {

  @Input() text: string = '';
  @Input() type: string = '';
  @Input() isEnable: boolean = false;

  constructor() { }


  ngOnInit() {}

}

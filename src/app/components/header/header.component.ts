import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
import { IonHeader, IonBackButton,IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon ]
})
export class HeaderComponent  implements OnInit {

  constructor(private navController: NavController) {
    addIcons({arrowBack})
   }

  ngOnInit() {}

  backPage(){
    this.navController.back({
      animated: true,
      animationDirection: 'back'
    })
  }

  
}

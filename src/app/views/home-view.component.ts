import { Component } from '@angular/core';
import { HeaderComponent } from '../components/HeaderComponent/header.component'
@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../components/HeaderComponent/header.component'
import { ProjectsComponent } from '../components/ProjectsComponent/projects.component'

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    HeaderComponent,
    ProjectsComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}

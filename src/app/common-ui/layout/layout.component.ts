import {Component, inject} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {ProfileService} from '../../data/services/profile.service';

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, RouterOutlet],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  profileService = inject(ProfileService)

  ngOnInit(): void {
    this.profileService.getMe().subscribe(console.log)
  }
}

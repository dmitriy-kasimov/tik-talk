import {Component, input} from '@angular/core';
import {IProfile} from '../../data/inerfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  imports: [],
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile=input<IProfile>()
}

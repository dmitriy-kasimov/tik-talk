import { Component, Input } from '@angular/core';
import {IProfile} from '../../data/inerfaces/profile.interface';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile?: IProfile;
}


import {Component, Input} from '@angular/core';
import {IProfile} from '../../../data/inerfaces/profile.interface';
import {ImgUrlPipe} from '../../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-subscriber-card',
  imports: [
    ImgUrlPipe
  ],
    standalone: true,
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() public profile!: IProfile;
}

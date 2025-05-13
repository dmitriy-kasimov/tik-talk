import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';
import {ProfileService} from './data/services/profile.service';
import {IProfile} from './data/inerfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tik-talk';

  profileService = inject(ProfileService)
  profiles: IProfile[] = []

  constructor(){
    this.profileService.getTestAccounts().subscribe(accounts => {this.profiles = accounts})
  }
}

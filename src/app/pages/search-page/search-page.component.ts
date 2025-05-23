import {Component, inject} from '@angular/core';
import {ProfileService} from '../../data/services/profile.service';
import {IProfile} from '../../data/inerfaces/profile.interface';
import {ProfileCardComponent} from '../../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  standalone: true,
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  title = 'tik-talk';

  profileService = inject(ProfileService)
  profiles: IProfile[] = []

  constructor(){
    this.profileService.getTestAccounts().subscribe(accounts => {this.profiles = accounts})
  }
}

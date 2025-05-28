import { Component } from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIconComponent,
    SubscriberCardComponent,
    RouterLink
  ],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {label: 'Моя страница', icon: 'home', link: ''},
    {label: 'Чаты', icon: 'chats', link: 'chats'},
    {label: 'Поиск', icon: 'search', link: 'search'},
  ]
}

import { Component } from '@angular/core';
import {PostInputComponent} from '../post-input/post-input.component';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-post-feed',
    imports: [
        PostInputComponent,
        PostComponent
    ],
    standalone: true,
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {

}

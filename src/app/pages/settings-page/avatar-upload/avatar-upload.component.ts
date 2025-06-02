import {Component, signal} from '@angular/core';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-avatar-upload',
    imports: [
        SvgIconComponent
    ],
  standalone: true,
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {
    preview = signal<string>('/assets/images/avatar-placeholder.png')

    fileBrowserHandler(event: Event){
        const file = (event.target as HTMLInputElement)?.files?.[0]

        if(!file || file.type.match('image')) return
        const reader = new FileReader();
        reader.onload = event => {
            this.preview.set(event.target?.result?.toString() ?? '')
        }

        reader.readAsDataURL(file);
    }
}

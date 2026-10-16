import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onbording-video',
  templateUrl: './onbording-video.stories.html',
})
export class OnbordingVideoStoryComponent {
  @Input() label: string = 'onbording-video';
  @Input() className?: string = '';

  imageSrc = 'assets/cards/card-business.png';
  youtubeUrl = 'https://www.youtube.com/watch?v=aqz-KE-bpKQ';
  fileUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}

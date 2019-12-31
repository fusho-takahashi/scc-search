import { Component } from '@angular/core';
import { VIDEO_DATA } from './VIDEO_DATA';
import { VideoData } from '../shared/domain/model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videoData: VideoData[] = [...VIDEO_DATA];
  constructor() {}

  sortNewer() {
    this.videoData = [...VIDEO_DATA];
  }

  sortOlder() {
    this.videoData = [...VIDEO_DATA];
    this.videoData.reverse();
  }
}

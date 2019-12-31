import { Component } from '@angular/core';
import { VIDEO_DATA } from './VIDEO_DATA';
import { VideoData, memberName } from '../shared/domain/model';

type sortOrder = '新しい順' | '古い順' | '再生数が多い順';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videoData: VideoData[] = [...VIDEO_DATA];
  order: sortOrder = '新しい順';

  constructor() {}

  sortNewer() {
    this.videoData.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    });
    this.order = '新しい順';
  }

  sortOlder() {
    this.videoData.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    this.order = '古い順';
  }

  sortViewCount() {
    this.videoData.sort((a, b) => {
      if (a.viewCount > b.viewCount) {
        return -1;
      }
      if (a.viewCount < b.viewCount) {
        return 1;
      }
      return 0;
    });
    this.order = '再生数が多い順';
  }

  filterMember(name: memberName) {
    const filterResult = this.videoData.filter((video: VideoData) => {
      return video.memberNames.includes(name);
    });

    this.videoData = [...filterResult];
  }
}

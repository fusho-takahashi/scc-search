import { Component, OnInit } from '@angular/core';
import { VIDEO_DATA } from './VIDEO_DATA';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  readonly videoData = VIDEO_DATA;
  constructor() {}

  ngOnInit() {}
}

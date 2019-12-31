import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { memberName } from 'src/app/shared/domain/model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() youtubeId: string;
  @Input() title: string;
  @Input() viewCount: number;
  @Input() memberNames: memberName[];

  @Output() selectMember = new EventEmitter<memberName>();
  constructor() {}

  ngOnInit() {}
}

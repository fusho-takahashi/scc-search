export interface VideoData {
  id: string;
  title: string;
  viewCount: number;
  memberNames: memberName[];
}

export type memberName =
  | '小鳥遊七星'
  | '桜瀬もえ'
  | '夏生のん'
  | '美和花樺'
  | '星野雫'
  | '双葉みきな'
  | '渡辺栞'
  | '大嶋ひかり'
  | '藤咲はな'
  | '南ララ'
  | '加藤伶奈'
  | '雪咲みうな'
  | '成瀬あいな'
  | '水越菜波'
  | '望月みらん'
  | '西野蓮';

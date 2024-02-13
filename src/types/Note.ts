export interface Note {
  id: number;
  title: string | null;
  description: string | null;
  link: string | null;
  code: string | null;
  createdAt: Date;
  recentViewAt: Date;
  isPinned: boolean | null;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  isPinned: boolean | null;
  createdAt: Date;
  recentAddAt: Date;
}

export interface ProjectMedia {
  srcThumb: string;
  srcFull: string;
  alt: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string[];
  media: ProjectMedia[];
  link?: string;
}

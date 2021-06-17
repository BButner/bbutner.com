export interface PostAuthor {
  name: string;
  picture: string;
}

export interface PostCoverImage {
  _type: string;
  asset: PostCoverImageAsset;
  crop: PostCoverImageCrop;
  hotspot: PostCoverImageHotSpot;
}

interface PostCoverImageAsset {
  _ref: string;
  _type: string;
}

interface PostCoverImageCrop {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface PostCoverImageHotSpot {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface Post {
  _id: string;
  author: PostAuthor;
  coverImage: PostCoverImage;
  date: string;
  slug: string;
  title: string;
  description: string;
  draft: boolean;
  body: any;
}
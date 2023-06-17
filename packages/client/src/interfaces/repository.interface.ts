export interface IData {
  totalCount: number;
  edges: IEdge[];
  pageInfo: IPageInfo;
}

export interface IRepository {
  id: string;
  name: string;
  ownerName: string;
  createdAt: Date;
  fullName: string;
  reviewCount: number;
  ratingAverage: number;
  forksCount: number;
  stargazersCount: number;
  description: string;
  language: string;
  ownerAvatarUrl: string;
}

export interface IEdge {
  node: IRepository;
  cursor: string;
}

interface IPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Post {
  id: number;
  user_id: number;
  image_id: number;
  tags_id: number;
  title: string;
  latitude: number;
  longitude: number;
  city: string;
  text: string;
  created_at: string;
  name: string;
  pfp: string;
  link_pfp: string;
  image: string;
  comments: Comments;
  reactions: Reactions;
}

export interface Comments {
  quantidadeComentarios: number;
  commentsData: any[];
}

export interface Reactions {
  quantidadeLike: number;
  reactionsData: any[];
}
export interface City {
  city: string;
}

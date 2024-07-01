type TokenResponse = {
  token: string;
};

type Topic = {
  id: number;
  name: string;
  description: string;
};

type User = {
  id: number,
  username: string,
  email: string,
  followedTopics: Topic[]
}

type Article = {
  id: number;
  title: string;
  content: string;
  topic: Topic;
  author: User;
  createdAt: Date;
  comments: AComment[];
}

type AComment = {
  id: number;
  content: string;
  author: Omit<User, 'followedTopics'>;
  createdAt: Date;
}

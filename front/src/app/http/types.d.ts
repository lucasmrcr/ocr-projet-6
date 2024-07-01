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

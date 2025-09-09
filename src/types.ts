
export type Character = {
  name: string;
  imgSrc: string;
};

export type GameData = {
  name: string;
  slug: string;
  portraitWidth: number;
  portraitHeight: number;
  characters: Character[];
};

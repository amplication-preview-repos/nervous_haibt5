import { Anime as TAnime } from "../api/anime/Anime";

export const ANIME_TITLE_FIELD = "id";

export const AnimeTitle = (record: TAnime): string => {
  return record.id?.toString() || String(record.id);
};

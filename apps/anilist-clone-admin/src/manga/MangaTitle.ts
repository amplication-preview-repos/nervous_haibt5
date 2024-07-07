import { Manga as TManga } from "../api/manga/Manga";

export const MANGA_TITLE_FIELD = "id";

export const MangaTitle = (record: TManga): string => {
  return record.id?.toString() || String(record.id);
};

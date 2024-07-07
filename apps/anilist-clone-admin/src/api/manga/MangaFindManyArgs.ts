import { MangaWhereInput } from "./MangaWhereInput";
import { MangaOrderByInput } from "./MangaOrderByInput";

export type MangaFindManyArgs = {
  where?: MangaWhereInput;
  orderBy?: Array<MangaOrderByInput>;
  skip?: number;
  take?: number;
};

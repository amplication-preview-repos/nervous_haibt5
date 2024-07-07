import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MangaServiceBase } from "./base/manga.service.base";

@Injectable()
export class MangaService extends MangaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

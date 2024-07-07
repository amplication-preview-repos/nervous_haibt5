import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MangaModuleBase } from "./base/manga.module.base";
import { MangaService } from "./manga.service";
import { MangaController } from "./manga.controller";
import { MangaResolver } from "./manga.resolver";

@Module({
  imports: [MangaModuleBase, forwardRef(() => AuthModule)],
  controllers: [MangaController],
  providers: [MangaService, MangaResolver],
  exports: [MangaService],
})
export class MangaModule {}

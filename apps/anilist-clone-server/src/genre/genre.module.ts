import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GenreModuleBase } from "./base/genre.module.base";
import { GenreService } from "./genre.service";
import { GenreController } from "./genre.controller";
import { GenreResolver } from "./genre.resolver";

@Module({
  imports: [GenreModuleBase, forwardRef(() => AuthModule)],
  controllers: [GenreController],
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
})
export class GenreModule {}

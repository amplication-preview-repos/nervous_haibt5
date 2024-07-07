import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GenreService } from "./genre.service";
import { GenreControllerBase } from "./base/genre.controller.base";

@swagger.ApiTags("genres")
@common.Controller("genres")
export class GenreController extends GenreControllerBase {
  constructor(
    protected readonly service: GenreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

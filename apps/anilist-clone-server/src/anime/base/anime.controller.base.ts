/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AnimeService } from "../anime.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnimeCreateInput } from "./AnimeCreateInput";
import { Anime } from "./Anime";
import { AnimeFindManyArgs } from "./AnimeFindManyArgs";
import { AnimeWhereUniqueInput } from "./AnimeWhereUniqueInput";
import { AnimeUpdateInput } from "./AnimeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnimeControllerBase {
  constructor(
    protected readonly service: AnimeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Anime })
  @nestAccessControl.UseRoles({
    resource: "Anime",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AnimeCreateInput,
  })
  async createAnime(@common.Body() data: AnimeCreateInput): Promise<Anime> {
    return await this.service.createAnime({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Anime] })
  @ApiNestedQuery(AnimeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Anime",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async animeItems(@common.Req() request: Request): Promise<Anime[]> {
    const args = plainToClass(AnimeFindManyArgs, request.query);
    return this.service.animeItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Anime })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Anime",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async anime(
    @common.Param() params: AnimeWhereUniqueInput
  ): Promise<Anime | null> {
    const result = await this.service.anime({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Anime })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Anime",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AnimeUpdateInput,
  })
  async updateAnime(
    @common.Param() params: AnimeWhereUniqueInput,
    @common.Body() data: AnimeUpdateInput
  ): Promise<Anime | null> {
    try {
      return await this.service.updateAnime({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Anime })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Anime",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAnime(
    @common.Param() params: AnimeWhereUniqueInput
  ): Promise<Anime | null> {
    try {
      return await this.service.deleteAnime({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

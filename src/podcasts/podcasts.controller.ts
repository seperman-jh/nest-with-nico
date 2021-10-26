import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {PodcastsService} from "./podcasts.service";
import {Podcast} from "./entities/podcast.entities";

@Controller('podcasts')
export class PodcastsController {

    constructor(private readonly podcastsService : PodcastsService) {}



    @Get()
    GetAllPodCasts(): Podcast[] {
        return this.podcastsService.GetAllPodCasts();
    }

    @Get(":id")
    GetPodCast(@Param("id") PodCastId:number) {
        return this.podcastsService.GetPodCast(PodCastId);
    }

    @Post()
    CreatePodCast(@Body() FormData)  {
        return this.podcastsService.CreatePodCast(FormData);
    }

    @Patch(":id")
    UpdatePodCast(@Param("id") PodCastId:number, @Body() FormData){
        return this.podcastsService.UpdatePodCast(PodCastId, FormData);
    }

    @Delete(":id")
    DeletePodCast(@Param("id") PodCastId : number)  {
        return this.podcastsService.DeletePodCast(PodCastId);
    }


}

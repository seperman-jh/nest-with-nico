import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
import {PodcastsService} from "./podcasts.service";
import {Podcast} from "./entities/podcast.entities";

@Controller('podcasts')
export class PodcastsController {

    constructor(private readonly podcastsService : PodcastsService) {}

    @Get()
    GetAllPodCasts(): Podcast[] {
        return this.podcastsService.GetAllPodCasts();
    }

    @Get("/:id")
    GetPodcast(): Podcast[] {
        return [];
    }

    @Post()
    CreatePodCast(@Body() FormData)  {
        return this.podcastsService.CreatePodCast(FormData);
    }



    @Delete("/:id")
    DeletePodCast() : string {
        return "";
    }


}

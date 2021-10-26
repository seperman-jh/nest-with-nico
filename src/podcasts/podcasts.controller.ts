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

    @Post()
    CreatePodCast(@Body() FormData)  {
        return "";
    }

    @Delete("/:id")
    DeletePodCast() : string {
        return "";
    }


}

import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {PodcastsService} from "./podcasts.service";
import {Podcast} from "./entities/podcast.entities";
import {Episodes} from "./entities/episode.entities";

@Controller('podcasts')
export class PodcastsController {

    constructor(private readonly podcastsService : PodcastsService) {}

    //0) 선언자에서 service 정의
    //1) HTTP Method 데코레이터 (Rest method, Return Code 셋팅 다 되있어서 엄청 편함!!)
    //2) Controller Name (서비스를 실행시키기 위한 함수)
    //3) Service Name (실제 Query, Work 실행)

    /* Podcast 기본 영역 */

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

    /* // Podcast 기본 영역 */


    /* Podcast Episode 영역  */

    @Get(":id/episode")
    GetPodCastEpisode(@Param("id") PodCastId:number) : Episodes[] {
        return this.podcastsService.GetPodCastEpisode(PodCastId);
    }

    @Post(":id/episode")
    CreatePodCastEpisode(@Param("id") PodCastId:number, @Body() FormData)  {
        return this.podcastsService.CreatePodCastEpisode(PodCastId, FormData);
    }


    @Patch(":id/episode/:episodeId")
    UpdatePodCastEpisode(@Param("id") PodCastId:number, @Param("episodeId") EpisodeId:number, @Body() FormData)  {
        return this.podcastsService.UpdatePodCastEpisode(PodCastId, EpisodeId, FormData);
    }

    @Delete(":id/episode/:episodeId")
    DeletePodCastEpisode(@Param("id") PodCastId:number, @Param("episodeId") EpisodeId:number)  {
        return this.podcastsService.DeletePodCastEpisode(PodCastId, EpisodeId);
    }


    /* // Podcast Episode 영역  */


}

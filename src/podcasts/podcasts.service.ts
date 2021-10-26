import { Injectable } from '@nestjs/common';
import {Podcast} from "./entities/podcast.entities";

@Injectable()
export class PodcastsService {

    private podcasts : Podcast[] = [];

    GetAllPodCasts() : Podcast[] {
        return this.podcasts;
    }


    CreatePodCast(FormData){
        return this.podcasts.push({
          id : this.podcasts.length + 1,
            ...FormData
        })
    }



}

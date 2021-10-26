import { Injectable } from '@nestjs/common';
import {Podcast} from "./entities/podcast.entities";

@Injectable()
export class PodcastsService {

    private podcast : Podcast[] = [];

    GetAllPodCasts() : Podcast[] {
        return this.podcast;
    }




}

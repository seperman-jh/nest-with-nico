import {Controller, Get} from '@nestjs/common';

@Controller('podcasts')
export class PodcastsController {

    @Get()
    GetPodCasts():string {
        return "123";
    }


}

import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { PodcastsController } from './podcasts/podcasts.controller';

@Module({
  imports: [],
  controllers: [MoviesController, PodcastsController],
  providers: [MoviesService],
})
export class AppModule {}

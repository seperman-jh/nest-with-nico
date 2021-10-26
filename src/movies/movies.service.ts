import { Injectable } from '@nestjs/common';
import {Movie} from "./entities/movie.entites";

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];


}

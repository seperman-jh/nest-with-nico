import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('movies')
export class MoviesController {




    @Get("/:id")
    getMovie(): string{
        return "123";
    }


    @Post()
    makeMovie():string{
        return "make a movie";
    }

    @Patch("/:id")
    patchMovie(@Param("id") id : string){
        return `patch a "${id}" movie`;
    }



    @Delete(":/id")
    deleteMovie(@Param("id") id : string){
        return `delete a "${id}" movie`;
    }

    @Get("search")
    getSearchMovies(@Body() FilteredData, @Query("source") QueryStringData:string){
        return {FilteredData, QueryStringData }
    }




}

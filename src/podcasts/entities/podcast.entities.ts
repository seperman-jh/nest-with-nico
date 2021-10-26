import {Episodes} from "./episode.entities";


export class Podcast {
    id: number;
    title: string;
    category: string;
    rating:number;
    episodes:Episodes[];
}
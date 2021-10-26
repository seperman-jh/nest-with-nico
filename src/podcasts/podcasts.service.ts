import {Injectable, NotFoundException} from '@nestjs/common';
import {Podcast} from "./entities/podcast.entities";

@Injectable()
export class PodcastsService {

    private podcasts : Podcast[] = [];

    GetAllPodCasts() : Podcast[] {
        return this.podcasts;
    }

    GetPodCast (PodCastId:number) : Podcast {
        const result = this.podcasts.find(podcast => podcast.id === +PodCastId);

        if(!result){
            throw new NotFoundException(`Not Found PodCastId : '${PodCastId}'`)
        }
        return result;
    }

    CreatePodCast(FormData) {
        return this.podcasts.push({
          id : this.podcasts.length + 1, // 아이디 1개 동적 생성, AI 기능
            ...FormData
        });
    }

    UpdatePodCast(PodCastId : number, FormData) {
        const result = this.GetPodCast(PodCastId); // result에 기존값 넣기
        this.DeletePodCast(PodCastId); // 원본 삭제

        this.podcasts.push({...result,...FormData});

        // 기존값 (result값) 에 업데이트된 "FormData" 를 덮어서 "새로" Push.
        // => 이렇게 되면, 업데이트라기보단 기존 정보를 가지고 "ReCreate"함.
        // => Array에서는 제일 마지막에 배치됨 - 순서 깨지는것이 맘에 안듬.
        // find 해서 해당 Array를 update 하는것이 더 직관적인것 같은데, 우선 과제 제출

        // ...은 "three dot" (ES6 문법 - 편의성)
        // 1) Array  에서는 연장(이어 붙임)
        // 2) Object 에서는 덮어쓰기. (위에서는 Object 방식 처리)
        // 참고 : https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript

    }

    DeletePodCast(PodCastId : number) : boolean {
        this.GetPodCast(PodCastId); // 유효성 검증
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== +PodCastId); // 현재 아이디를 제외한 모든 Array 재 생성후, 기존 Array에 덮어씀
        return true;
    }








}

import {Component,Input} from 'angular2/core';
@Component({
    selector:'like',
    template:`
        <span><i class="glyphicon glyphicon glyphicon-heart" [class.hilight]="iLike" (click)="toggleLike()"></i>{{totalLikes}}</span>
    `,
    styles:[`
        .glyphicon.hilight{
            color:red;
        }
    `]
})
export class LikeComponent{
    @Input() iLike=false;
    @Input() totalLikes=0;
    toggleLike(){
        this.iLike=!this.iLike;
        this.totalLikes+=this.iLike?1:-1;
    }

}
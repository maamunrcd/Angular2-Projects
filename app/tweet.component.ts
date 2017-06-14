import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';
@Component({
    selector: 'tweet',
    template: `
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="{{data.imageUrl}}" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{data.author}}<span class="handle">{{data.handle}}</span></h4>
            <p>{{data.body}}</p>
            <like [totalLikes]="data.totalLikes" [iLike]="data.iLike"></like>
          </div>
        </div>  
    `,
    directives: [LikeComponent],
    styles: [`
        .handle{font-size:12px;color:#9999}
    `]
})
export class TweetComponent {
    constructor() {
        console.log(this.data);
    }

    @Input() data;
}
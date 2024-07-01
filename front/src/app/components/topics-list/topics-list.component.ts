import {Component, Input, OnInit} from '@angular/core';
import {TopicService} from '../../http/topic.service';
import {UserService} from '../../http/user.service';

@Component({
  selector: 'app-component-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrl: './topics-list.component.scss',
})
export class TopicsListComponent implements OnInit {

  @Input() followed: boolean = false;

  me: User;
  topics: Topic[] = [];

  constructor(private topicService: TopicService, private userService: UserService) {
  }

  like(topic: Topic | undefined): void {
    if (!topic) return;
    this.topicService.like(topic).subscribe(() => this.ngOnInit());
  }

  dislike(topic: Topic | undefined): void {
    if (!topic) return;
    this.topicService.dislike(topic).subscribe(() => this.ngOnInit());
  }

  isSubscribed(topic: Topic | undefined): boolean {
    if (!topic) return false;
    return this.me?.followedTopics.some(t => t.id === topic.id) || false;
  }

  ngOnInit(): void {
    this.topicService.getAllTopics(this.followed).subscribe(topics => this.topics = topics);
    this.userService.getMe().subscribe(me => this.me = me);
  }
}

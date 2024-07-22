import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TopicService} from '../../http/topic.service';
import {UserService} from '../../http/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-component-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrl: './topics-list.component.scss',
})
export class TopicsListComponent implements OnInit, OnDestroy {

  @Input() followed: boolean = false;

  me: User;
  topics: Topic[] = [];

  private likeSubscriber: Subscription;
  private dislikeSubscriber: Subscription;
  private meSubscriber: Subscription;
  private topicsSubscriber: Subscription;

  constructor(private topicService: TopicService, private userService: UserService) {
  }

  /**
   * Unsubscribe from the like, dislike, me and topics subscribers
   */
  ngOnDestroy(): void {
    this.likeSubscriber?.unsubscribe();
    this.dislikeSubscriber?.unsubscribe();
    this.meSubscriber?.unsubscribe();
    this.topicsSubscriber?.unsubscribe();
  }

  /**
   * Like a topic
   *
   * @param topic The topic to like
   */
  like(topic: Topic | undefined): void {
    if (!topic) return;
    this.likeSubscriber = this.topicService.like(topic).subscribe(() => this.ngOnInit());
  }

  /**
   * Dislike a topic
   *
   * @param topic The topic to dislike
   */
  dislike(topic: Topic | undefined): void {
    if (!topic) return;
    this.dislikeSubscriber = this.topicService.dislike(topic).subscribe(() => this.ngOnInit());
  }

  /**
   * Check if the user is subscribed to a topic
   * @param topic The topic to check
   */
  isSubscribed(topic: Topic | undefined): boolean {
    if (!topic || !this.me) return false;
    return this.me?.followedTopics?.some(t => t.id === topic.id) || false;
  }

  /**
   * Get the topics from the server
   */
  ngOnInit(): void {
    this.meSubscriber = this.userService.getMe().subscribe(me => this.me = me);
    this.topicsSubscriber = this.topicService.getAllTopics(this.followed).subscribe(topics => this.topics = topics);
  }
}

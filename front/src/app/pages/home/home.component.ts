import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  private responsiveObserver: Subscription | undefined;
  isTabletMode: boolean = false;

  constructor(private responsive: BreakpointObserver) {
  }

  /**
   * Unsubscribe from the responsiveObserver when the component is destroyed
   */
  ngOnDestroy(): void {
    this.responsiveObserver?.unsubscribe();
  }

  /**
   * Subscribe to the responsiveObserver
   */
  ngOnInit(): void {
    this.responsiveObserver = this.responsive.observe(Breakpoints.Tablet).subscribe(() => {
      this.isTabletMode = this.responsive.isMatched(Breakpoints.Tablet);
    });
  }

}

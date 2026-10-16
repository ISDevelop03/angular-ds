import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { OnbordingStepComponent } from './onbording-step.component';
import { ONBORDING_STEPPER_THEME } from './theme';

/**
 * OnbordingStepperComponent
 *
 * Vertical stepper. Each `ds-onbording-step` can host any component.
 * The active step shows its content. Earlier steps show a check.
 * Later steps show a muted title.
 *
 * Live demo:
 * <example-url>/demo/ds-onbording-stepper.component.html</example-url>
 */
@Component({
  selector: 'ds-onbording-stepper',
  templateUrl: './onbording-stepper.component.html',
})
export class OnbordingStepperComponent
  implements AfterContentInit, OnDestroy {
  @Input() className = '';

  @Output() activeIndexChange = new EventEmitter<number>();

  @ContentChildren(OnbordingStepComponent)
  steps: QueryList<OnbordingStepComponent>;

  theme = ONBORDING_STEPPER_THEME.default;

  private _activeIndex = 0;
  private stepsReady = false;
  private stepsSub: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  @Input()
  set activeIndex(value: number | string) {
    var parsed = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(parsed)) {
      parsed = 0;
    }
    if (parsed === this._activeIndex && this.stepsReady) {
      return;
    }
    this._activeIndex = parsed;
    if (this.stepsReady) {
      this.syncSteps();
    }
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  ngAfterContentInit(): void {
    this.stepsReady = true;
    this.syncSteps();
    this.stepsSub = this.steps.changes.subscribe(() => {
      this.syncSteps();
      this.cd.detectChanges();
    });
    setTimeout(() => this.cd.detectChanges());
  }

  ngOnDestroy(): void {
    if (this.stepsSub) {
      this.stepsSub.unsubscribe();
    }
  }

  get stepList(): OnbordingStepComponent[] {
    return this.steps ? this.steps.toArray() : [];
  }

  goTo(index: number): void {
    var total = this.stepList.length;
    if (index < 0 || index >= total || index === this._activeIndex) {
      return;
    }
    this._activeIndex = index;
    this.syncSteps();
    this.activeIndexChange.emit(this._activeIndex);
  }

  prev(): void {
    this.goTo(this._activeIndex - 1);
  }

  next(): void {
    this.goTo(this._activeIndex + 1);
  }

  private syncSteps(): void {
    var list = this.stepList;
    var index = this._activeIndex;

    if (index < 0) {
      index = 0;
    }
    if (list.length && index > list.length - 1) {
      index = list.length - 1;
    }
    this._activeIndex = index;

    for (var stepIndex = 0; stepIndex < list.length; stepIndex++) {
      var step = list[stepIndex];
      step.index = stepIndex;
      step.isLast = stepIndex === list.length - 1;
      if (stepIndex < index) {
        step.status = 'done';
      } else if (stepIndex === index) {
        step.status = 'active';
      } else {
        step.status = 'upcoming';
      }
    }
  }
}

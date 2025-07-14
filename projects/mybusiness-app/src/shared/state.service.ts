// src/app/shared/state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  // private subject holding the current boolean
  private _isDiscrete$ = new BehaviorSubject<boolean>(false);

  // public readonly observable for subscribers
  public readonly isDiscrete$ = this._isDiscrete$.asObservable();

  /** Toggle or set the flag */
  setDiscrete(value: boolean) {
    this._isDiscrete$.next(value);
  }

  /** Flip the current flag */
  toggleDiscrete() {
    this._isDiscrete$.next(!this._isDiscrete$.getValue());
  }

  /** Synchronous getter if you need it */
  getDiscrete(): boolean {
    return this._isDiscrete$.getValue();
  }
}

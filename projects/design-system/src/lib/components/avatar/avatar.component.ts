import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { avatar } from './theme';

@Component({
  selector: 'ds-avatar',
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AvatarComponent {
  @Input() variant: 'default' | 'placeholder' | 'initials' = 'default';
  @Input() size: 'normal' | 'small' | 'large' = 'normal';
  @Input() alt: string = '';
  @Input() src: string =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...'; // same default
  @Input() className: string = '';
  @Input() children?: string;

  avatar = avatar;

  get classes(): string {
    return [
      this.avatar[this.variant].base,
      this.avatar.size[this.size],
      this.className,
    ]
      .filter(Boolean)
      .join(' ');
  }

  get textSize(): string {
    return this.avatar.initials.textSizes[this.size];
  }
}

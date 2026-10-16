import {
    Component,
    Input,
    ContentChild,
    TemplateRef,
    EventEmitter,
    Output,
} from '@angular/core';
import { StepButton } from './steps.component';

/**
 * Nested step projected inside a parent `ds-step`.
 * `StepComponent` collects these with `@ContentChildren`.
 * @ignore
 */
@Component({
    selector: 'ds-sub-step',
    template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class SubStepComponent {
    @Input() shouldGoNext: boolean = true;
    @Input() shouldGoPrev: boolean = true;
    @Input() data: any;

    @Input() leftButtons: StepButton[] = [];

    @Input() rightButtons: StepButton[] = [];

    /** Emitted when advancing to a new sub-step */
    @Output() nextStep = new EventEmitter<{
        button: StepButton;
        event: any;
        data: any;
        currentIndex: number;
    }>();

    /** Emitted when going back to a previous sub-step */
    @Output() prevStep = new EventEmitter<{
        button: StepButton;
        data: any;
        event: any;
        currentIndex: number;
    }>();

    @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
}

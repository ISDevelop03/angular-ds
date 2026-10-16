import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.stories.html',
})
export class StepsStoryComponent {
  @Input() label: string = 'steps';
  @Input() className?: string = '';

  currentStepIndex = 0;
  step1Done = false;
  step2Done = false;
  step3Done = false;
  step4Done = false;

  subStepStoryIndex = 0;
  identityDone = false;
  contactDone = false;
  preferencesDone = false;

  cancel = () => {
    this.step1Done = false;
    this.step2Done = false;
    this.step3Done = false;
    this.step4Done = false;
    this.currentStepIndex = 0;
    console.log('cancel clicked');
  };

  leftButtons = [
    {
      variant: 'secondary',
      content: 'Cancel',
      disableHandleStep: true,
      onClick: (btn) => {
        this.cancel();
        console.log('this is cancel hahah', btn);
      },
    },
    {
      variant: 'secondary',
      content: 'Prev',
      onClick: (btn) => {
        console.log('this is prev hahah', btn);
      },
    },
  ];

  rightButtons = [
    {
      variant: 'primary',
      content: 'Next',
      onClick: (btn) => {
        console.log('this is next hahah', btn);
      },
    },
  ];
  leftButtons1 = [
    {
      variant: 'secondary',
      content: 'A Cancel',
      disableHandleStep: true,
      onClick: (btn) => {
        this.cancel();
        console.log('this is cancel hahah', btn);
      },
    },
    {
      variant: 'secondary',
      content: 'A Prev',
      onClick: (btn) => {
        console.log('this is prev hahah', btn);
      },
    },
  ];

  rightButtons1 = [
    {
      variant: 'primary',
      content: 'A Next',
      onClick: (btn) => {
        console.log('this is next hahah', btn);
      },
    },
  ];

  resetSubSteps = () => {
    this.subStepStoryIndex = 0;
    this.identityDone = false;
    this.contactDone = false;
    this.preferencesDone = false;
  };

  identityLeftButtons = [
    {
      variant: 'secondary',
      content: 'Cancel',
      disableHandleStep: true,
      onClick: () => this.resetSubSteps(),
    },
  ];

  identityRightButtons = [
    {
      variant: 'primary',
      content: 'Continue',
      onClick: () => {},
    },
  ];

  contactLeftButtons = [
    {
      variant: 'secondary',
      content: 'Cancel',
      disableHandleStep: true,
      onClick: () => this.resetSubSteps(),
    },
    {
      variant: 'secondary',
      content: 'Back',
      onClick: () => {},
    },
  ];

  contactRightButtons = [
    {
      variant: 'primary',
      content: 'Save contact',
      onClick: () => {},
    },
  ];

  notificationsLeftButtons = [
    {
      variant: 'secondary',
      content: 'Back',
      onClick: () => {},
    },
  ];

  notificationsRightButtons = [
    {
      variant: 'primary',
      content: 'Finish',
      onClick: () => {},
    },
  ];

  finishLeftButtons = [
    {
      variant: 'secondary',
      content: 'Review',
      onClick: () => {},
    },
  ];

  finishRightButtons = [
    {
      variant: 'primary',
      content: 'Done',
      disableHandleStep: true,
      onClick: () => this.resetSubSteps(),
    },
  ];

  subStepStoryNext(event: any) {
    this.subStepStoryIndex = event.currentIndex;
  }

  subStepStoryPrev(event: any) {
    this.subStepStoryIndex = event.currentIndex;
  }

  prevStepHandler(event: any) {
    this.currentStepIndex = event.currentIndex;
    console.log('Previous step:', event);
  }

  nextStepHandler(event: any) {
    this.currentStepIndex = event.currentIndex;
    console.log('Next step:', event);
  }
}

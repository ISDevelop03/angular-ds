import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.stories.html',
})
export class ModalStoryComponent {
  isInfoModalOpen = false
  isWarningModalOpen = false
  isErrorModalOpen = false
  isSuccessModalOpen = false


  openInfoModal() {
    this.isInfoModalOpen = true;
  }

  openWarningModal() {
    this.isWarningModalOpen = true;
  }

  openErrorModal() {
    this.isErrorModalOpen = true;
  }

  openSuccessModal() {
    this.isSuccessModalOpen = true;
  }

  onCloseModal() {
    this.isInfoModalOpen = false;
  }

  onSecondaryActionOnClick() {
    console.log('Secondary action clicked');
  }

  onMainActionOnClick() {
    console.log('Main action clicked');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.stories.html',
})
export class PopupStoryComponent {
  isModalOpen: boolean = false;
  isSlideLeftOpen: boolean = false;
  isSlideRightOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  openSlideLeft() {
    this.isSlideLeftOpen = true;
  }

  openSlideRight() {
    this.isSlideRightOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  closeSlideLeft() {
    this.isSlideLeftOpen = false;
  }

  closeSlideRight() {
    this.isSlideRightOpen = false;
  }
}

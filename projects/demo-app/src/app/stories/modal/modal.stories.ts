import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.stories.html',
})
export class ModalStoryComponent {
  isModalOpen = false

  openModal() {
    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
  }
}

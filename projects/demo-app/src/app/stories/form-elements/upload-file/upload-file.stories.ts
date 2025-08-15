import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.stories.html',
})
export class UploadFileStoryComponent {
  @Input() label: string = 'upload-file';
  @Input() className?: string = '';
  templateLink = 'assets/template.csv';
  variant: 'light' | 'dark' = 'light';

  progressMultiple: number = 0;
  isLoadingMultiple: boolean = false;

  progressSingle: number = 0;
  isLoadingSingle: boolean = false;

  simulateUploadMultiple() {
    const totalDurationMs = 1000;
    const tickIntervalMs = 100;
    const totalTicks = totalDurationMs / tickIntervalMs;
    let ticks = 0;

    this.isLoadingMultiple = true;
    const intervalId = window.setInterval(() => {
      ticks++;
      this.progressMultiple = Math.round((ticks / totalTicks) * 100);


      if (ticks >= totalTicks) {
        clearInterval(intervalId);
        this.progressMultiple = 100;
        this.isLoadingMultiple = false;
      }
    }, tickIntervalMs);
  }

  simulateUploadSingle() {
    const totalDurationMs = 1000;
    const tickIntervalMs = 100;
    const totalTicks = totalDurationMs / tickIntervalMs;
    let ticks = 0;

    this.isLoadingSingle = true;
    const intervalId = window.setInterval(() => {
      ticks++;
      this.progressSingle = Math.round((ticks / totalTicks) * 100);


      if (ticks >= totalTicks) {
        clearInterval(intervalId);
        this.progressSingle = 100;
        this.isLoadingSingle = false;
      }
    }, tickIntervalMs);
  }
  
  onFileMultipleSelected() {
    this.simulateUploadMultiple();
  }

  onFileSingleSelected() {
    this.simulateUploadSingle();
  }
}

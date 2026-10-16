import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DomPortalHost, TemplatePortal } from '@angular/cdk/portal';
import { ONBORDING_VIDEO_THEME } from './theme';

/**
 * OnbordingVideoComponent
 *
 * Thumbnail with a YouTube play icon. Clicking it opens a 16:9 popup and plays `videoUrl`.
 * YouTube and Vimeo links play in an embed; any other URL plays in a video element.
 *
 * Live demo:
 * <example-url>/demo/ds-onbording-video.component.html</example-url>
 */
@Component({
  selector: 'ds-onbording-video',
  templateUrl: './onbording-video.component.html',
})
export class OnbordingVideoComponent implements OnInit, OnDestroy {
  @Input() className = '';
  @Input() videoUrl = '';
  @Input() imageSrc = '';
  @Input() imageAlt = 'Play video';

  @ViewChild('playerTpl') playerTpl: TemplateRef<any>;

  theme = ONBORDING_VIDEO_THEME.default;
  isOpen = false;
  useNativePlayer = false;
  safeEmbedUrl: SafeResourceUrl = null;

  private portalHost: DomPortalHost;
  private playerPortal: TemplatePortal<any>;
  private previousBodyOverflow = '';

  constructor(
    private sanitizer: DomSanitizer,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.portalHost = new DomPortalHost(
      document.body,
      this.cfr,
      this.appRef,
      this.injector
    );
  }

  ngOnDestroy() {
    this.close();
  }

  open(): void {
    var url = (this.videoUrl || '').trim();
    if (!url || this.isOpen) {
      return;
    }

    var embedUrl = this.toEmbedUrl(url);
    if (embedUrl) {
      this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.useNativePlayer = false;
    } else {
      this.safeEmbedUrl = null;
      this.useNativePlayer = true;
    }

    this.isOpen = true;
    this.playerPortal = new TemplatePortal(this.playerTpl, this.vcr);
    this.portalHost.attach(this.playerPortal);
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    if (this.portalHost && this.portalHost.hasAttached()) {
      this.portalHost.detach();
    }
    if (this.isOpen) {
      document.body.style.overflow = this.previousBodyOverflow || '';
    }
    this.isOpen = false;
    this.safeEmbedUrl = null;
    this.useNativePlayer = false;
  }

  playNative(event: Event): void {
    var video = event.target as HTMLVideoElement;
    if (!video || !video.paused) {
      return;
    }
    var playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(function () {});
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.close();
    }
  }

  private toEmbedUrl(url: string): string | null {
    var youtubeMatch = url.match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|shorts\/|live\/|v\/|watch\?(?:.*&)?v=))([A-Za-z0-9_-]{11})/
    );
    if (youtubeMatch && youtubeMatch[1]) {
      return (
        'https://www.youtube.com/embed/' +
        youtubeMatch[1] +
        '?autoplay=1&rel=0&modestbranding=1'
      );
    }

    var vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return 'https://player.vimeo.com/video/' + vimeoMatch[1] + '?autoplay=1';
    }

    return null;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.stories.html',
})
export class FooterStoryComponent {
  @Input() className?: string = '';

  leftMenus = [
    { title: 'About Us', href: '#' },
    { title: 'Contact', href: '#' },
    { title: 'Privacy Policy', href: '#' },
  ];
  rightMenus = [
    { title: 'Terms of Service', href: '#' },
    { title: 'Help', href: '#' },
    {
      title: 'Feedback',
      href: '#',
      image: 'assets/logo-saham-bank.png',
    },
  ];
}

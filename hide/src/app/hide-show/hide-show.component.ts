import { Component } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css']
})
export class HideShowComponent {
  showAbout=false;
  showContact=false;
  showHelp=false;
    toggle(section:string){
      if (section === 'about') this.showAbout = !this.showAbout;
    if (section === 'contact') this.showContact = !this.showContact;
    if (section === 'help') this.showHelp = !this.showHelp;

    }
  }



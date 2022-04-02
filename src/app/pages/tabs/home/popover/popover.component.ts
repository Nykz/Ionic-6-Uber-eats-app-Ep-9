import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dismissPopover();
    }, 8000);
  }

  dismissPopover(data?) {
    this.popoverController.dismiss(data);
  }

}

import {Component} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {
  userName = '';
  welcomeMsg = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  onChange() {
    this.valid = this.userName.length > 0;
  }
  constructor(private i18nSupportService: I18nSupportService) {
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsgByCode(this.userName);
  }

}

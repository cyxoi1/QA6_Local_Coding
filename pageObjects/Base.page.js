export default class BasePage {

  open(path) {
    browser.url(path);
  }

  // this is to close permission denied notification after user login

  get permissionDenied() {
    return $('[class="ant-notification-close-x"]');
  }

  // closeNotification() {
  //   this.permissionDenied.click();
  // }

  // this is to close contact information drawer

  get contactInformation() {
    return $('[class="ant-drawer-close"]');
  }
  //
  // closeContactInformation() {
  //   this.contactInformation.click();
  //
  // }


}

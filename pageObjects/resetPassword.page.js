import BasePage from "./../pageObjects/Base.page";



class ResetPasswordPage extends BasePage {


  get passwordTab() {
    return $('[class="ant-menu-item"]')[0];
  }

  get oldPassword() {
    return $('#oldPassword');
  }

  get newPassword() {
    return $('#newPassword');
  }

  get newPasswordConf() {
    return $('#confirmPassword');
  }

  get updatePasswordBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }



  open(path) {
    return super.open('user/login');
  }

}

export default new ResetPasswordPage();
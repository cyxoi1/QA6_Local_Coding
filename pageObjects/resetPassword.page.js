import BasePage from "./../pageObjects/Base.page";



class ResetPasswordPage extends BasePage {


  open(path) {
    return super.open('user/register');
  }

}

export default new ResetPasswordPage();
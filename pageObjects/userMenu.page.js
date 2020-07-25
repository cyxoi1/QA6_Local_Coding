import BasePage from './Base.page';

class UserMenu extends BasePage {

  get userMenuDropdown() {
    return $('[class="ant-avatar ant-avatar-circle ant-avatar-icon"]');
  }

  get profileItem() {
    return $('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')[0];
  }

  get settingsItem() {
    return $('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')[1];
  }

  get logoutItem() {
    return $('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')[2];
  }

  get shippingAddress() {
    return $$('[class="ant-menu-item ant-menu-item-selected"]');
  }

  get welcomeBack() {
    return $('h1');
  }


  open() {
    return super.open('user/login');
  }


}

export default new UserMenu();
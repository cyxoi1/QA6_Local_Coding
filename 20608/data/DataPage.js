const dataRegisterPage = {
  header: 'Create an account',
};
const email = (Math.random() * 1000).toFixed() + '@gmail.com';
const RegisterData = {
  firstName: 'New',
  lastName: 'User',
  email,
  password: '123123',
  newPassword: '123321',
  phone: '1234567890',
};

export { dataRegisterPage, RegisterData };

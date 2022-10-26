type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'John', password: '123456' };
const sentUser = { username: 'John', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);

loggedIn ? console.log('Usuário logado') : console.log('Usuário não logado');

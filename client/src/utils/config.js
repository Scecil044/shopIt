export const setName = (users, user) => {
  return users[0]._id === user._id ? users[1]?.firstName : user.firstName;
};

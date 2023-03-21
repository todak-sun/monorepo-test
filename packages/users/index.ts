export type User = {
  name: string;
  age: number;
};

export const createUsers = (size = 10) => {
  const users: User[] = [];
  for (let i = 0; i < size; i++) {
    users.push({
      name: `name${i}`,
      age: i,
    });
  }
  return users;
};

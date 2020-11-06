import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Gunil Na",
    email: "gunil@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Melanie Barrionuevo",
    email: "melanie@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

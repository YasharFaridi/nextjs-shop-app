import bcrypt from "bcryptjs";

const users = [
  {
    name: "Yashar",
    email: "yashar_faridy@gmail.com",
    password: bcrypt.hashSync("yashar1999"),
    isAdmin: true,
  },
  {
    name: "Kaniel",
    email: "kaniel_outis@redrum.ir",
    password: bcrypt.hashSync("199878"),
    isAdmin: false,
  },
];

export default users
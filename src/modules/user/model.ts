import { Model, DataTypes, Op } from 'sequelize';
import sequelize from 'src/database/sequelize';
import hashPassword from 'src/utils/hashPassword';
import * as bcrypt from 'bcryptjs';

enum Status {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export default class User extends Model {
  public id!: string;
  public firstname!: string | null;
  public lastname!: string | null;
  public username!: string;
  public email!: string;
  public password!: string;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static getByField: (field, value) => User;
  public static hasCorrectPassword: (password, user) => boolean;
  public static createUser: (data) => Promise<User>;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  sequelize,
  hooks: {
    beforeCreate(data) {
      data.password = hashPassword(data.password);
      data.status = Status.UNVERIFIED;
    },
  },
  scopes: {
    byField({ field, value }) {
      return {
        where: {
          [field]: {
            [Op.eq]: value,
          },
        },
      };
    },
  },
});

User.getByField = (field, value) => User.scope({ method: ['byField', { field, value }] }).findOne();

User.hasCorrectPassword = (password, user) => {
  return bcrypt.compareSync(password, user.password);
};

User.createUser = async (data): Promise<User> => {
  const newUser = await User.create({
    firstname: data.firstname || '',
    lastname: data.lastname || '',
    username: data.username || '',
    email: data.email || '',
    password: data.password || '',
  });
  return newUser;
};

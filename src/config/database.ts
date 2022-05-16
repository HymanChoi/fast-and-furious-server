const productConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test',
  },
};

const testingConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test',
  },
};

const config = process.env.NODE_ENV ? productConfig : testingConfig;

export default config;

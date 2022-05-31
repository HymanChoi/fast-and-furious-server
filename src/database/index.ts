const productConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'test',
  },
};

const testingConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'test',
  },
};

const config = process.env.NODE_ENV ? productConfig : testingConfig;

export default config;

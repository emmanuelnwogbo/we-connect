import dotenv from 'dotenv'

dotenv.config();

module.exports = {
  development: {
    use_env_variable: "DEV_DB",
    use: {
      dialect: 'DB_DIALECT'
    }
  },
  test: {
    use_env_variable: "TEST_DB",
    use: {
      dialect: 'DB_DIALECT'
    }
  },
  production: {
    use_env_variable: "PROD_DB",
    use: {
      dialect: 'DB_DIALECT'
    }
  },
};
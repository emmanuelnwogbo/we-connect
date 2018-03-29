import dotenv from 'dotenv'

dotenv.config();

module.exports = {
  development: {
    use_env_variable: "DEV_DB",
    use: {
      dialect: 'postgres'
    }
  },
  test: {
    use_env_variable: "TEST_DB",
    use: {
      dialect: 'postgres'
    }
  },
  production: {
    use_env_variable: "PROD_DB",
    use: {
      dialect: 'postgres'
    }
  },
};
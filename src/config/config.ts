export const config = {
  "dev": {
    "username": process.env.DEV_USERNAME,
    "password": process.env.DEV_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_HOST,
    "dialect": "dev",
    "aws_region": process.env.AWS_region,
    "aws_profile": process.env.AWS_profile,
    "aws_media_bucket": process.env.AWS_media_bucket
    
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
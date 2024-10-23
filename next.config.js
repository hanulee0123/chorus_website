/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      CHOIR_NAME: process.env.CHOIR_NAME || '九州合唱団',
      FOUNDATION_DATE: process.env.FOUNDATION_DATE || '2024年4月1日',
    },
  }
  
  module.exports = nextConfig

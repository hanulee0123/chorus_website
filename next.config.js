/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      CHOIR_NAME: process.env.CHOIR_NAME || '九州合唱団',
      FOUNDATION_DATE: process.env.FOUNDATION_DATE || '2024年4月1日',
    },
  }
  
module.exports = {
    async headers() {
      return [
        {
          // すべてのページにヘッダーを適用
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';",
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'no-referrer',
            },
            {
              key: 'Permissions-Policy',
              value: 'geolocation=(), microphone=()',
            },
          ],
        },
      ]
    }}

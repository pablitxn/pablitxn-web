/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PAYMASTER_ADDRESS: process.env.PAYMASTER_ADDRESS,
    GOVERNOR_ADDRESS: process.env.GOVERNOR_ADDRESS,
    GOVERNANCE_TOKEN_ADDRESS: process.env.GOVERNANCE_TOKEN_ADDRESS,
    MONGODB_URI: process.env.MONGODB_URI,
  },
}

module.exports = nextConfig

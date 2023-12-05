/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules = [
          ...config.module.rules,
          {
            test: /\.svg$/i,
            use: ['@svgr/webpack']
          }
        ];
    
        return config;
      },
}

module.exports = nextConfig

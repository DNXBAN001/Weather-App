/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.weatherapi.com',//
            // port: '',//can leave this one out
            // pathname: '',//can leave this one out
          },
        ],
      },
};

// domains:["cdn.weatherapi.com"] //deprecated
export default nextConfig;

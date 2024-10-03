/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['lojaintegrada.com.br', 'apod.nasa.gov'], 
    },
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
            pathname: '/**',
            port: '',
        }
    ],    
}
  ;
  
  export default nextConfig;
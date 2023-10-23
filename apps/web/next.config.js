module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: {
    // declare here all your variables
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

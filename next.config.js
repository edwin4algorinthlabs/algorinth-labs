// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // add environment variables
    
    env: {
    
    /* abstracted */
    /* abstracted */
    // NEXT_PUBLIC_SERVICE_ID: 'service_g122hkf',
    // NEXT_PUBLIC_TEMPLATE_ID: 'template_xk7st4e',
    // NEXT_PUBLIC_PUBLIC_KEY: 'F6ufjQHQIKDkpfu9d',
    NEXT_PUBLIC_MONGO_KEY: "mongodb+srv://wale:Al!vx2_nbT@algorinthtest.ihirmyz.mongodb.net/",
    NEXT_PUBLIC_EMAILELASTIC_KEY: "7423A46826F482D57115F102A130DB102733",
    NEXT_PUBLIC_COINMARKETCAP_KEY: "0856007a-8010-4ba6-8ee8-021e96374cf4",
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: "hxqm2du3oh7j",
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: "O6DlrG-NCdovo84zhtSiMizryFQBUKCGTbElzbqdhfA",
    NEXT_PUBLIC_GMAIL_SMTP_PASS: "kvik yvkg sntn ovvq"
    },

    images: {
        domains: ['images.ctfassets.net'],
    },
}
    
module.exports = nextConfig
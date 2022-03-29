module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  }, email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('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'),
    },
    settings: {
      defaultFrom: 'ehad1one@gmail.com',
      defaultReplyTo: 'ehad1one@gmail.com',
    },
  },
});

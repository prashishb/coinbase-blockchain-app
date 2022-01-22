import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'om0nggkr',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skNlsOgV0kYFODdzK1VqEpoFzCqzBj3rVNQE42i2Q6Y03PNHVPZD4WfcP6W6EHPO0xUekkazYZJVfPGVJY3kuljybIu2HosNLFoXtezAYrbFF3sqxbvfWkNKA2Y04wIv6jdB6Wq5ZZtSvwTZkDAxEaCT8XxvkenvX39GbRkZKTxuR9ELPPXr',
  useCdn: false,
});

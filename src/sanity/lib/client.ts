import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  // Estes campos abaixo garantem que o Next.js lide com o cache de forma inteligente
  perspective: 'published',
})

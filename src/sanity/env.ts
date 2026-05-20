export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-10'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

// Using a demo project ID so the studio doesn't crash on boot.
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'awmxurn3', 
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

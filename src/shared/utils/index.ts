import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const removeDollarSign = (data: string) => Number(data.replace('$', ''))

export function convertUrlToLocalPath(url: string): string {
  // Extract the path after "localhost:4000/"
  const urlParts = url.split('localhost:4000/')

  if (urlParts.length < 2) {
    throw new Error('Invalid URL format')
  }

  // Replace forward slashes with backslashes to match the format
  const localPath = urlParts[1].replace(/\//g, '\\')

  return localPath
}

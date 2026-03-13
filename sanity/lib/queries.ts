import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{
  _id, title, slug, publishedAt, mainImage, excerpt, "author": author, "categories": categories
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, mainImage, body, excerpt, "author": author, "categories": categories
}`

import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc, _createdAt desc)[0...100]{
  _id, _createdAt, _updatedAt, title, slug, publishedAt, mainImage, excerpt, "author": author, "categories": categories
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, _createdAt, _updatedAt, title, slug, publishedAt, mainImage, body, excerpt, "author": author, "categories": categories
}`

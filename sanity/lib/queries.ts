import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc, _createdAt desc)[0...100]{
  _id, _createdAt, _updatedAt, title, slug, publishedAt, mainImage, excerpt, "author": author, "categories": categories
}`

// Keep sitemap discovery independent from the 100-post limit used by blog listings.
// Only fields needed to build sitemap entries are requested.
export const SITEMAP_POSTS_QUERY = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  (!defined(publishedAt) || publishedAt <= now())
] | order(coalesce(publishedAt, _createdAt) desc, _createdAt desc){
  _createdAt, _updatedAt, publishedAt, slug
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, _createdAt, _updatedAt, title, slug, publishedAt, mainImage, body, excerpt, "author": author, "categories": categories, metaTitle, metaDescription, keywords
}`

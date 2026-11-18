import { zohoClient } from "./zohoClient";
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from "./queries";
import { zohoProjectId, zohoDataset } from "../env";

const ZOHO_BLOG_REVALIDATE_SECONDS = 60;

export async function getZohoPosts() {
  if (!zohoProjectId || !zohoDataset) {
    return [];
  }
  return zohoClient.fetch(
    POSTS_QUERY,
    {},
    {
      // Refresh shortly after publishing without requesting Sanity for every visitor.
      next: { revalidate: ZOHO_BLOG_REVALIDATE_SECONDS },
    },
  );
}

export async function getZohoPostBySlug(slug: string) {
  if (!zohoProjectId || !zohoDataset) {
    return null;
  }
  return zohoClient.fetch(
    POST_BY_SLUG_QUERY,
    { slug },
    {
      next: { revalidate: ZOHO_BLOG_REVALIDATE_SECONDS },
    },
  );
}

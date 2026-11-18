import { zohoClient } from "./zohoClient";
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from "./queries";
import { zohoProjectId, zohoDataset } from "../env";

export async function getZohoPosts() {
  if (!zohoProjectId || !zohoDataset) {
    return [];
  }
  return zohoClient.fetch(
    POSTS_QUERY,
    {},
    {
      // Keep newly published Zoho posts visible on listing pages without
      // making a fresh Sanity request for every visitor.
      next: { revalidate: 300 },
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
      next: { revalidate: 3600 },
    },
  );
}

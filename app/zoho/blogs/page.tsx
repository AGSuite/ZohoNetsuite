import React from 'react';
import { Metadata } from 'next';
import { getZohoPosts } from '../../../sanity/lib/zohoFetch';
import ZohoBlogsGrid from './components/ZohoBlogsGrid';

export const metadata: Metadata = {
    title: "Zoho Blogs & Insights | AGSuite Technologies",
    description: "Read the latest Zoho updates, expert tips, and cloud transformation strategies from AGSuite Technologies.",
};

export default async function ZohoBlogsPage() {
    const blogs = await getZohoPosts();
    console.log('DEBUG: TOTAL BLOGS FETCHED =', blogs.length);
    if (blogs.length > 0) {
        console.log('DEBUG: NEWEST BLOG IN LIST =', blogs[0].title, 'PUBLISHED AT =', blogs[0].publishedAt);
    }

    return (
        <main>
            <ZohoBlogsGrid blogs={blogs} />
        </main>
    );
}





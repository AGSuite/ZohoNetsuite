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

    return (
        <main>
            <ZohoBlogsGrid blogs={blogs} />
        </main>
    );
}

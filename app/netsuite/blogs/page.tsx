import React from 'react';
import { Metadata } from 'next';
import { getPosts } from '../../../sanity/lib/fetch';
import NSBlogsGrid from './components/NSBlogsGrid';

export const metadata: Metadata = {
    title: "NetSuite Blogs & Insights | AGSuite Technologies",
    description: "Read the latest Oracle NetSuite updates, expert tips, and cloud ERP strategies from AGSuite Technologies.",
};

export default async function BlogsPage() {
    const blogs = await getPosts();

    return (
        <main>
            <NSBlogsGrid blogs={blogs} />
        </main>
    );
}

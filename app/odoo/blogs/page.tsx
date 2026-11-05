import React from 'react';
import { Metadata } from 'next';
import { getOdooPosts } from '../../../sanity/lib/odooFetch';
import OdooBlogsGrid from './components/OdooBlogsGrid';

export const metadata: Metadata = {
    title: "Odoo Blogs & Insights | AGSuite Technologies",
    description: "Read the latest Odoo updates, expert tips, and cloud transformation strategies from AGSuite Technologies.",
};

export default async function OdooBlogsPage() {
    const blogs = await getOdooPosts();

    return (
        <main>
            <OdooBlogsGrid blogs={blogs} />
        </main>
    );
}





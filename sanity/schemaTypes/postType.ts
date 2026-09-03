import { defineField, defineType, defineArrayMember } from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Underline', value: 'underline' },
                            { title: 'Strike', value: 'strike-through' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                }),
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineArrayMember({
                    type: 'object',
                    name: 'codeBlock',
                    title: 'Code Block / Snippet',
                    fields: [
                        defineField({
                            name: 'filename',
                            title: 'Filename / Title (Optional)',
                            description: 'e.g. script.js, custom_workflow.deluge, or config.json',
                            type: 'string',
                        }),
                        defineField({
                            name: 'language',
                            title: 'Language',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'SuiteScript (NetSuite)', value: 'suitescript' },
                                    { title: 'Deluge (Zoho)', value: 'deluge' },
                                    { title: 'JavaScript', value: 'javascript' },
                                    { title: 'TypeScript', value: 'typescript' },
                                    { title: 'HTML', value: 'html' },
                                    { title: 'CSS', value: 'css' },
                                    { title: 'JSON', value: 'json' },
                                    { title: 'Python', value: 'python' },
                                    { title: 'SQL', value: 'sql' },
                                    { title: 'Bash / Shell', value: 'bash' },
                                    { title: 'Plain Text', value: 'text' },
                                ],
                            },
                            initialValue: 'javascript',
                        }),
                        defineField({
                            name: 'code',
                            title: 'Code',
                            type: 'text',
                            rows: 10,
                            validation: (Rule) => Rule.required().error('Code content cannot be empty'),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'filename',
                            language: 'language',
                            code: 'code',
                        },
                        prepare({ title, language, code }: any) {
                            return {
                                title: title || `${language || 'code'} block`,
                                subtitle: code ? code.slice(0, 60).replace(/\n/g, ' ') : '',
                            };
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})

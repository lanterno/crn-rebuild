import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
          },
          {
            type: 'string',
            name: 'heroTitle',
            label: 'Hero Title',
          },
          {
            type: 'string',
            name: 'heroSubtitle',
            label: 'Hero Subtitle',
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body Content',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'home') {
              return '/';
            }
            return `/${document._sys.filename}`;
          },
        },
      },
      {
        name: 'siteSettings',
        label: 'Site Settings',
        path: 'src/content/settings',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'siteName',
            label: 'Site Name',
            required: true,
          },
          {
            type: 'string',
            name: 'tagline',
            label: 'Tagline',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
          },
          {
            type: 'object',
            name: 'navigation',
            label: 'Navigation',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.label || 'Nav Item',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
                required: true,
              },
              {
                type: 'string',
                name: 'href',
                label: 'Link',
                required: true,
              },
              {
                type: 'boolean',
                name: 'external',
                label: 'External Link',
              },
            ],
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [
              {
                type: 'string',
                name: 'copyright',
                label: 'Copyright Text',
              },
              {
                type: 'string',
                name: 'privacyLink',
                label: 'Privacy Policy Link',
              },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social Links',
            fields: [
              {
                type: 'string',
                name: 'slack',
                label: 'Slack Invite Link',
              },
              {
                type: 'string',
                name: 'youtube',
                label: 'YouTube Channel',
              },
            ],
          },
        ],
      },
    ],
  },
});


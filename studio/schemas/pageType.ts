import {defineArrayMember, defineField, defineType} from 'sanity'
import {LeaveIcon} from '@sanity/icons'
//import {StarIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'SEO Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'desc',
      title: 'SEO Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'heading',
          type: 'heading',
        }),
        defineArrayMember({
          name: 'body',
          title: 'Body',
          type: 'blockType',
        }),
        defineArrayMember({
          name: 'details',
          type: 'details',
        }),
        defineArrayMember({
          name: 'card',
          title: 'Card',
          type: 'card',
        }),

        defineArrayMember({
          name: 'cta',
          type: 'object',
          title: 'Internal CTA',
          fields: [
            {
              name: 'text',
              type: 'string'
            },
            {
              name: 'reference',
              type: 'reference',
              title: 'Reference',
              to: [
                { type: 'page' },
                // other types you may want to link to
              ],
            },
          ],
          icon: LeaveIcon,
          preview: {
            select: {
              title: 'text',
              image: 'image',
            },
            prepare({title, image}) {
              return {
                title: `[ ${title} ▶︎ ]` || 'Untitled',
                subtitle: 'Internal CTA',
                media: image || LeaveIcon,
              }
            },
          },
        }),
        defineArrayMember({
          name: 'xcta',
          type: 'object',
          title: 'External CTA',
          fields: [
            {
              name: 'text',
              type: 'string'
            },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              }),
            },
          ],
          icon: LeaveIcon,
          preview: {
            select: {
              title: 'text',
              image: 'image',
            },
            prepare({title, image}) {
              return {
                title: `[ ${title} ▶︎ ]` || 'Untitled',
                subtitle: 'External CTA',
                media: image || LeaveIcon,
              }
            },
          },
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        /*defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),*/
        /*defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),*/
        /*defineArrayMember({
          name: 'video',
          type: 'video',
        }),*/
      ],
    }),

    /*defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'string'
        },
        {
          name: 'link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),*/
    /*defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),*/
  ],
  /*preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },*/
})

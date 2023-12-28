import {defineArrayMember, defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'
import {LeaveIcon} from '@sanity/icons'

export const cardType = defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile only?',
      type: 'boolean',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Card builder',
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
      ],
    }),
    
  ],
  icon: BookIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Card',
        media: image || BookIcon,
      }
    },
  },
})
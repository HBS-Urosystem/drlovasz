import {defineArrayMember, defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'
import {LeaveIcon} from '@sanity/icons'

export const twocolsType = defineType({
  name: 'twocols',
  title: '2 columns',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Block Title',
      type: 'string',
    }),
    defineField({
      name: 'col1',
      title: 'Column 1',
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
          name: 'twocols',
          title: '2 columns',
          type: 'twocols',
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
    defineField({
      name: 'col2',
      title: 'Column 2',
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
          name: 'twocols',
          title: '2 columns',
          type: 'twocols',
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
        subtitle: '2 columns',
        media: image || BookIcon,
      }
    },
  },
})
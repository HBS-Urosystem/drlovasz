import {defineArrayMember, defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'
import {LeaveIcon} from '@sanity/icons'

export const navType = defineType({
  name: 'nav',
  title: 'Menu Lists',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nav Title',
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
        isUnique: () => true,
      },
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile only?',
      type: 'boolean',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Nav builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'cta',
          type: 'object',
          title: 'Internal Link',
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
          title: 'External Link',
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
      ],
    }),
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    })

  ],
  icon: MenuIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Menu',
        media: image || MenuIcon,
      }
    },
  },
})
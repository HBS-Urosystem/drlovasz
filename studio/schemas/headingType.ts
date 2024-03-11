import {defineField, defineType} from 'sanity'
import {BlockElementIcon, ChevronRightIcon} from '@sanity/icons'

export const headingType = defineType({
  name: 'heading',
  type: 'object',
  title: 'Heading',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
      ],
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    /*defineField({
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
      icon: ChevronRightIcon,
      preview: {
        select: {
          title: 'text',
          image: 'image',
        },
        prepare({title, image}) {
          return {
            title: title || 'Untitled',
            subtitle: 'Internal CTA',
            media: image || ChevronRightIcon,
          }
        },
      },
    }),*/

  ],
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
      tagline: 'tagline',
    },
    prepare({title, image, tagline}) {
      return {
        title: title || 'Heading',
        subtitle: tagline || 'Heading',
        media: image || BlockElementIcon,
      }
    },
  },
})
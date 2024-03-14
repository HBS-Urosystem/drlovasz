import {defineField, defineType} from 'sanity'
import {ChevronDownIcon} from '@sanity/icons'

export const detailsType = defineType({
  name: 'details',
  title: 'Details',
  type: 'object',
  fields: [
    defineField({
      name: 'summary',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      type: 'blockContent',
    }),
  ],
  icon: ChevronDownIcon,
  preview: {
    select: {
      title: 'summary',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Details',
        media: image || ChevronDownIcon,
      }
    },
  },
})
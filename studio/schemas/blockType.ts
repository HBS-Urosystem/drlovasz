import {defineField, defineType} from 'sanity'
import {StringIcon} from '@sanity/icons'

export const blockType = defineType({
  name: 'blockType',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Block Title',
      type: 'string',
    }),
    defineField({
      name: 'textBlock',
      title: 'Text Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'twocols',
      title: 'Two columns?',
      type: 'boolean',
    }),
  ],
  icon: StringIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text Block',
        media: image || StringIcon,
      }
    },
  },
})
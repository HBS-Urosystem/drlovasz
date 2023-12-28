import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {documentInternationalization} from '@sanity/document-internationalization'
import {defineField/*, defineType*/} from 'sanity'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(), 
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'hu', title: 'Magyar'},
        {id: 'en', title: 'English'}
      ],
      schemaTypes: ['page', 'nav'],
      // Adds additional fields to the metadata document
      metadataFields: [
        defineField({ name: 'slug', type: 'slug' })
      ],
    })
  ]
})

import {defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Article Title",
      type: "string",
  },
  {
    name: 'article',
    title: 'Article',
    type: 'markdown',
  }
  ],
})
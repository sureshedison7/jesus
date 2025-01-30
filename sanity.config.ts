// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'nfms7h1o',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})
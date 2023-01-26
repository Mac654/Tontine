export default {
  name: 'Landing',
  title: 'Landing',
  type: 'document',
  fields: [
    {
      name: 'template',
      title: 'Template',
      type: 'string',
      required: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: false,
      description: 'If not happy with what the system generated, you can hand-edit it here'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [ {type: 'Sectionname'}, {type: 'SectionInfo'}],
    },
  ],
}
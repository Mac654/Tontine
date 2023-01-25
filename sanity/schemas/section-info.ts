export default {
    name:'SectionInfo',
    type:'document',
    title:'Section-Info',
    fields:[
        {
            name:'TopText',
            type:'string',
            title:'TopText',
            // @ts-ignore 
            validation: Rule => Rule.max(50).error('Shorter titles are usually better')
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}
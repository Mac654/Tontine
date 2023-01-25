import { defineField } from "sanity";

export default {
    name:'LandingPage',
    type:'document',
    title:'LandingPage',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name',
        },
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }),
    ]
}
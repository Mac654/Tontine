export default {
    name:'Sectionname',
    type:'document',
    title:'Section-CTA',
    fields:[
        {
            name:'TopText',
            type:'string',
            title:'TopText',
            // Getting typescript error on this line,tried with yup library or @sanity/validation but no luck
            // validation:Rule.min(3).max(150).error('Must be between 3 and 150 characters'), 

            // Tried with this but no luck
            // validation: {
            //     min:3,
            //     max:150,
            //     rule: 'Must be between 3 and 150 characters'
            // }

            // So i went with this for the moment
             // @ts-ignore 
            validation: Rule => Rule.max(50).error('Shorter titles are usually better')
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name:'BottomText',
            type:'string',
            title:'BottomText',
            // @ts-ignore 
            validation: Rule => Rule.max(50).error('Bottom text too long are usually better')
        },
    ]
}
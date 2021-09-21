import { MdLocalPizza as icon } from 'react-icons/md'
import PriceInput from '../components/PriceInput.js';

export default {
    /// computer name
    name: 'pizza',
    // visible title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
            name:'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pziza',
        },
        {
            name:'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name:'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000),
            // TODO: Add custom input components
            inputComponent: PriceInput,
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'topping' }] }]
        }
    ],
    preview: {
        select: {
            // no difference between name or title in the preview
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({ title, media, ...toppings }) => {
            
            const tops = Object.values(toppings).filter(Boolean)

            return {
                title,
                media,
                subtitle: tops.join(', ')
            };
        }
    },  
}
;import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    /// computer name
    name: 'topping',
    // visible title
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name:'name',
            title: 'Topping Name',
            type: 'string',
            description: 'What is the name of the toppings?',
        },
        {
            name:'vegeterian',
            title: 'Vegeterian',
            type: 'boolean',
            description: 'What is the name of the toppings?',
            options: {
                layout: 'checkbox',
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegeterian: 'vegeterian',
        },
        prepare: ({name,vegeterian}) => ({
            title: `${name} ${vegeterian ? '🌱' : ''}`
        })
    }
}
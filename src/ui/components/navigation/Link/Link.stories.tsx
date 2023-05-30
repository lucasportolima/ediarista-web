import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import Link from './Link'

export default {
    title: 'navigation/Link',
    component: Link
} as Meta<typeof Link>

const Template: StoryFn<typeof Link> = (args) => (
    <Link {...args}>Click Here</Link>
)

export const Default = Template.bind({})
Default.args = {
    children: 'Clique Aqui'
}

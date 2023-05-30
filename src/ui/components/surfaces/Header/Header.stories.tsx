import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import Header from './Header'

export default {
    title: 'surfaces/Header',
    component: Header
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = (args) => (
    <Header {...args} />
)

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import RoundedButton from './RoundedButton'

export default {
    title: 'inputs/RoundedButton',
    component: RoundedButton
} as Meta<typeof RoundedButton>

const Template: StoryFn<typeof RoundedButton> = (args) => (
    <RoundedButton {...args}>Click Here</RoundedButton>
)

export const Default = Template.bind({})
Default.args = {
    variant: 'contained'
}

export const MeuBotao = () => <RoundedButton />
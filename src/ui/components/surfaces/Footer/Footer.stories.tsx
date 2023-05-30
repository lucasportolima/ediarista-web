import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Footer from './Footer';

export default {
    title: 'surfaces/Footer',
    component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer />;

export const Default = Template.bind({});
Default.args = {};

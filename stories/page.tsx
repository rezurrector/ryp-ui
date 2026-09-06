import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/ui/button';

const meta = {
  title: 'Example/Page',
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Welcome to RYP UI',
    variant: 'default',
    size: 'lg',
  },
};

export default meta;
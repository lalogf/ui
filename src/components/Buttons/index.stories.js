import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryButton from './index';

storiesOf('Buttons', module)
  .add('Primary as a link', () => <PrimaryButton tag="a"> Postula hoy </PrimaryButton>)
  .add('Primary as a button', () => <PrimaryButton tag="button"> Postula hoy </PrimaryButton>);

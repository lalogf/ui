import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Typography', module)
  .add('Links default', () => (
    <Link href="#links">
      Default
    </Link>
  ))
  .add('Links primary', () => (
    <Link href="#links" variant="primary">
      Primary
    </Link>
  ))
  .add('Links secondary', () => (
    <Link href="#links" variant="secondary">
      Magenta
    </Link>
  ))
  .add('Links tertiary', () => (
    <Link href="#links" variant="tertiary">
      Mint
    </Link>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertReadme from './README.md';

import Alert from '.';



storiesOf('Alerts', module)
  .addParameters({
    readme: {
      content: AlertReadme,
    },
  })
  .add('Warning', () => (
    <>
      <Alert>
        El proceso de admisión termina en 5 días.
      </Alert>
    </>
  ))
  .add('Success', () => (
    <>
      <Alert variant="success">
        Tu cuenta se creó correctamente
      </Alert>
    </>
  ))
  .add('Info', () => (
    <>
    <Alert variant="info">
    Este proceso aún no tiene egresadas asignadas.
    </Alert>
    </>
    ))
  .add('Danger', () => (
    <>
    <Alert variant="danger">
    Este proceso aún no tiene egresadas asignadas.
    </Alert>
    </>
    ));

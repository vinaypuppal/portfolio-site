import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { H1, H2, H3, P, HR, Quote } from './index';
import Link from '../link';

const stories = storiesOf('Typography', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('Text', () => (
  <div>
    <H1>
      About <H1.B>Me</H1.B>
    </H1>
    <P>
      Lorem <P.B>ipsum</P.B> dolor sit amet, consectetur adipisicing elit.
      Recusandae quae fugiat mollitia iste esse est praesentium, quo possimus
      nesciunt, maiores, et animi <Link href="#">inventore</Link> fugit sed?
      Sapiente rem cupiditate atque eligendi.
    </P>
    <H2>Some of skills include</H2>
    <P>
      Lorem <P.B>ipsum</P.B> dolor sit amet, consectetur adipisicing elit.
      Recusandae quae fugiat mollitia iste esse est praesentium, quo possimus
      nesciunt, maiores, et animi{' '}
      <Link href="https://vinaypuppal.com">inventore</Link> fugit sed? Sapiente
      rem cupiditate atque eligendi.
    </P>
    <H3>Currently focusing on</H3>
    <P>
      Lorem <P.B>ipsum</P.B> dolor sit amet, consectetur adipisicing elit.
      Recusandae quae fugiat mollitia iste esse est praesentium, quo possimus
      nesciunt, maiores, et animi <Link href="#">inventore</Link> fugit sed?
      Sapiente rem cupiditate atque eligendi.
    </P>
    <Quote>
      Lorem <Link href="https://lorempixel.com">ipsum</Link> dolor sit amet
      consectetur adipisicing elit. Ut, suscipit aliquid! Error libero nulla
      quam amet iure veniam perspiciatis debitis dicta earum maxime, eius vitae
      obcaecati, suscipit quidem odio qui?
    </Quote>
    <HR />
    <H1>
      My <H1.B>Works</H1.B>
    </H1>
    <P>
      Lorem <P.B>ipsum</P.B> dolor sit amet, consectetur adipisicing elit.
      Recusandae quae fugiat mollitia iste esse est praesentium, quo possimus
      nesciunt, maiores, et animi <Link href="#">inventore</Link> fugit sed?
      Sapiente rem cupiditate atque eligendi.
    </P>
  </div>
));

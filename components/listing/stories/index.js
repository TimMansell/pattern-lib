import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs';

import ListItem from './listitem.vue';


storiesOf('Listing', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'List - 3',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      return {
        components: { ListItem},
        template: `
          <div>
          <h3 class="heading-section" style="text-align: center;">Listing 3 items per row</h3>
          <div class="listing listing--three">
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
          </div>
          </div>
        `
      }
    }
  ))
  .add(
    'List - 4',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      return {
        components: { ListItem},
        template: `
          <div>
          <h3 class="heading-section" style="text-align: center;">Listing 4 items per row</h3>
          <div class="listing listing--four">
            <ListItem>
              <img src="http://via.placeholder.com/400x400" height="400" >              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
          </div>
          </div>
        `
      }
    }
  ))
  .add(
    'List - variable cell witdth',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      return {
        components: { ListItem},
        template: `
          <div>
          <h3 class="heading-section" style="text-align: center;">Listing - cells define width</h3>
          <div class="listing">
            <ListItem>
              <img src="http://via.placeholder.com/400x400" height="400" >              
            </ListItem>
            <ListItem class="list-item--desk-1of3">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem class="list-item--desk-2of3">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem class="list-item--desk-1of4">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem class="list-item--desk-1of4">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem class="list-item--desk-1of4">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem class="list-item--desk-1of4">
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
            <ListItem>
              <img src="http://via.placeholder.com/400x400">              
            </ListItem>
          </div>
          </div>
        `
      }
    }
  ));
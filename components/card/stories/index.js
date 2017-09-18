import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  object,
  select,
  color,
  date,
} from '@storybook/addon-knobs';


import ListItem from '../../listing/stories/listitem.vue';
import CardImage from './card-image.vue';
import CardNews from './card-news.vue';
import CardLink from './card-link.vue';
import CardImageListing from './card-imagelisting.vue';
import CardFocusBox from './card-focus-box.vue';
import CardFocusImages from './card-focusimages.vue';
import CardFact from './card-fact.vue';
import CardDivision from './card-division.vue';


storiesOf('Cards', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section bg-alt">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'Card - with image',
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
      const title = text('Title', 'About Us');
      return {
        components: { ListItem, CardImage },
        template: `
          <div>
            <h3 style="text-align: center;" class="heading-section">Image box</h3>
            <p style="text-align: center;">Can somebody come up with a name for this version?</p>
            <div class="listing listing--three">
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/300x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/600x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/550x200" title="Governance" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardImage thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
              </ListItem>
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - news listing',
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
      const title = text('Title', 'About Us');
      return {
        components: { ListItem, CardNews },
        template: `
          <div >
            <h3 style="text-align: center;" class="heading-section">News listing</h3>
            <div class="listing listing--three">
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/200x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Governance" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
              </ListItem>
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - small link box',
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
      const items = object('Links', [
        {
          title: 'Research',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/growing_esteem/learning-teaching/study.jpg"
        },
        {
          title: 'Learning and teaching',
          href: '#',
          thumb: "http://via.placeholder.com/300x400"
        },
        {
          title: 'Working with us',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/growing_esteem/learning-teaching/statisticsandrankings.jpg"
        }
      ]);

      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardLink },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Small link boxes</h3>
            <div class="listing listing--four listing--center">
              ${items.map(item => `<ListItem><CardLink thumb="${item.thumb}" ${inverted ? "inverted" : ''} title="${item.title}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Image listing (bio images)',
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
      const items = object('Links', [
        {
          title: 'Mr John Smith',
          meta: 'Provost',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Professor-Jim-McCluskey.jpg"
        },
        {
          title: 'Professor John Doggeton',
          meta: 'Provost',
          href: '#',
          thumb: "http://via.placeholder.com/300x400"
        },
        {
          title: 'Mr Allan Tait',
          meta: 'Vice-Principal (Advancement)',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Allan-Tait.jpg"
        },
        {
          title: 'Chancellor',
          meta: 'Chancellor',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Nick-Blinco.jpg"
        },
        {
          title: 'Mr John Smith',
          meta: 'Provost',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Professor-Jim-McCluskey.jpg"
        },
        {
          title: 'Professor John Doggeton',
          meta: 'Provost',
          href: '#',
          thumb: "http://via.placeholder.com/300x400"
        },
        {
          title: 'Mr Allan Tait',
          meta: 'Vice-Principal (Advancement)',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Allan-Tait.jpg"
        },
        {
          title: 'Chancellor',
          meta: 'Chancellor',
          href: '#',
          thumb: "http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Nick-Blinco.jpg"
        },
      ]);

      return {
        components: { ListItem, CardImageListing },
        template: `
          <div style="text-align: center;">
            <h3 class="heading-section">Bio images</h3>
            <div class="listing listing--four">
              ${items.map(item => `<ListItem><CardImageListing thumb="${item.thumb}" meta="${item.meta}" title="${item.title}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Focus box (eg: growing esteem)',
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
      const items = object('Items', [
        {
          title: "Learning and teaching",
          icon: "#icon-learning-1",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "Option 2",
          icon: "#icon-learning-2",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "Something else",
          icon: "#icon-learning-3",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },

      ]);
      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardFocusBox },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Focus boxes</h3>
            <p>Used in growing esteem. WIP - Dependant on icons</p>
            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardFocusBox class="bg-white" icon="${item.icon}" title="${item.title}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Focus box ( image listing )',
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
      const items = object('Items', [
        {
          title: "Learning and teaching",
          thumb: "http://via.placeholder.com/300x400",
        },
        {
          title: "Option 2",
          thumb: "http://via.placeholder.com/300x400"
        },
        {
          title: "Something else",
          thumb: "http://via.placeholder.com/300x400",
        },

      ]);
      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardFocusImages },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Focus boxes</h3>

            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardFocusImages class="bg-white" thumb="${item.thumb}" title="${item.title}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Fact',
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
      const items = object('Items', [
        {
          title: "666",
          meta: "Million people",
          class: "",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of2",
          excerpt: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of2",
          excerpt: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-2of3",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of3",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of3",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-2of3",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of4",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of4",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of4",
        },
        {
          title: "No. 1",
          meta: "Research facility",
          class: "list-item--desk-1of4",
        },
      ]);
      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardFact },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Fact cards</h3>
            <p>Stats</p>
            <div class="listing">
              ${items.map(item => `<ListItem class="${item.class}"><CardFact class="bg-white" meta="${item.meta}" title="${item.title}" excerpt="${typeof item.excerpt !== 'undefined' ? item.excerpt : ''}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ))
  .add(
    'Card - Division',
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
      const items = object('Items', [
        {
          title: "Enterprise",
          subtitle: "Doron Ben-Meir",
          meta: "Vice-Principal Enterprise",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "Research Infrastructure and Systems",
          subtitle: "Professor John Doggeton",
          meta: "Pro Vice-Chancellor (Research Infrastructure & Systems)",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident iure fugit, veritatis, delectus numquam.",
        },
        {
          title: "Enterprise",
          subtitle: "Doron Ben-Meir",
          meta: "Vice-Principal Enterprise",
          excerpt: "Lorem ipsum dolor sit amet",
        },
      ]);
      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardDivision },
        template: `
          <div style="text-align: center;">
            <h3 style="text-align: center;" class="heading-section">Division card</h3>
            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardDivision class="bg-white" meta="${item.meta}" title="${item.title}" subtitle="${item.subtitle}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </div>
        `
      }
    }
  ));
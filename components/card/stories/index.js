import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, object, select } from '@storybook/addon-knobs';

import ListItem from '../../listing/stories/listitem.vue';
import CardImage from './card-image.vue';
import CardNews from './card-news.vue';
import CardLink from './card-link.vue';
import CardImageListing from './card-imagelisting.vue';
import CardFocusBox from './card-focus-box.vue';
import CardFocusImages from './card-focusimages.vue';
import CardFact from './card-fact.vue';
import CardDivision from './card-division.vue';
import CardDivisionHead from './card-divisionhead.vue';

storiesOf('Cards', module)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <Story/>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'Card - with image',
    () => ({
      components: { ListItem, CardImage },
      template: `
          <section-wrap class="bg-alt">
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
          </section-wrap>
        `,
    })
  )
  .add(
    'Card - news listing (3 column)',
    () => ({
      components: { ListItem, CardNews },
      template: `
          <section-wrap class="bg-alt">
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
          </section-wrap>
        `,
    })
  )
  .add(
    'Card - news listing (1 column)',
    () => ({
      components: { ListItem, CardNews },
      template: `
          <section-wrap class="bg-alt">
            <h3 style="text-align: center;" class="heading-section">News listing</h3>
            <div class="listing listing--one">
              <ListItem>
                <CardNews :cols="1" thumb="http://via.placeholder.com/200x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
              </ListItem>
              <ListItem>
                <CardNews :cols="1" thumb="http://via.placeholder.com/400x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
              </ListItem>
              <ListItem>
                <CardNews :cols="1" thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews :cols="1" thumb="http://via.placeholder.com/400x200" title="Governance" excerpt="this is a test of the content"/>
              </ListItem>
              <ListItem>
                <CardNews :cols="1" thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
              </ListItem>
            </div>
          </section-wrap>
        `,
    })
  )
  .add(
    'Card - small link box',
    () => {
      const items = object('Links', [
        {
          title: 'Research',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/growing_esteem/learning-teaching/study.jpg',
        },
        {
          title: 'Learning and teaching',
          href: '#',
          thumb: 'http://via.placeholder.com/300x400',
        },
        {
          title: 'Working with us',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/growing_esteem/learning-teaching/statisticsandrankings.jpg',
        },
      ]);

      const inverted = boolean('Inverted', true);
      return {
        components: { ListItem, CardLink },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Small link boxes</h3>
            <div class="listing listing--four listing--center">
              ${items.map(item => `<ListItem><CardLink thumb="${item.thumb}" ${inverted ? 'inverted' : ''} title="${item.title}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Image listing (bio images)',
    () => {
      const items = object('Links', [
        {
          title: 'Mr John Smith',
          meta: 'Provost',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Professor-Jim-McCluskey.jpg',
        },
        {
          title: 'Professor John Doggeton',
          meta: 'Provost',
          href: '#',
          thumb: 'http://via.placeholder.com/300x400',
        },
        {
          title: 'Mr Allan Tait',
          meta: 'Vice-Principal (Advancement)',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Allan-Tait.jpg',
        },
        {
          title: 'Chancellor',
          meta: 'Chancellor',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Nick-Blinco.jpg',
        },
        {
          title: 'Mr John Smith',
          meta: 'Provost',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Professor-Jim-McCluskey.jpg',
        },
        {
          title: 'Professor John Doggeton',
          meta: 'Provost',
          href: '#',
          thumb: 'http://via.placeholder.com/300x400',
        },
        {
          title: 'Mr Allan Tait',
          meta: 'Vice-Principal (Advancement)',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Allan-Tait.jpg',
        },
        {
          title: 'Chancellor',
          meta: 'Chancellor',
          href: '#',
          thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Mr-Nick-Blinco.jpg',
        },
      ]);

      return {
        components: { ListItem, CardImageListing },
        template: `
          <section-wrap class="bg-alt">
            <h3 class="heading-section">Bio images</h3>
            <div class="listing listing--four">
              ${items.map(item => `<ListItem><CardImageListing thumb="${item.thumb}" meta="${item.meta}" title="${item.title}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Focus box (eg: growing esteem)',
    () => {
      const items = object('Items', [
        {
          title: 'Learning and teaching',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Option 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Something else',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },

      ]);
      return {
        components: { ListItem, CardFocusBox },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 class="heading-section">Focus boxes</h3>
            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardFocusBox class="bg-white" title="${item.title}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Focus box (eg: two column)',
    () => {
      const items = object('Items', [
        {
          title: 'Learning and teaching',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Option 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Something else',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },

      ]);
      return {
        components: { ListItem, CardFocusBox },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 class="heading-section">Focus boxes</h3>
            <div class="listing listing--two">
              ${items.map(item => `<ListItem><CardFocusBox class="bg-white" title="${item.title}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Focus box ( image listing )',
    () => {
      const items = object('Items', [
        {
          title: 'Learning and teaching',
          thumb: 'http://about-us-unimelb.netlify.com/images/working-with-us/careers/ParkvilleBotany.jpg',
          excerpt: 'Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat.',
        },
        {
          title: 'Option 2',
          thumb: 'http://about-us-unimelb.netlify.com/images/working-with-us/careers/SouthbankGrounds3.jpg',
          excerpt: 'Lorem ipsum dolor sit amet Obcaecati vel delectus necessitatibus et, quasi.',
        },
        {
          title: 'Something else',
          thumb: 'http://via.placeholder.com/200x300',
          excerpt: 'Lorem ipsum dolor sit amet aliquid laboriosam ducimus, quam blanditiis.',
        },

      ]);
      const colors = select('Focus colors', ['', 'card--image-focus--col-brand', 'card--image-focus--col-white'], '');
      const bgColors = select('Card BG', ['bg-white', 'bg-alt', 'bg-inverted'], 'bg-alt');
      const element = select('Element', ['a', 'div'], 'div');

      return {
        components: { ListItem, CardFocusImages },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Images with focus marks</h3>

            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardFocusImages element="${element}" class="${colors} ${bgColors}" thumb="${item.thumb}" title="${item.title}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Hero Image',
    () => {
      const items = object('Items', [
        {
          title: 'Learning and teaching',
          thumb: 'http://about-us-unimelb.netlify.com/images/history.jpg',
          excerpt: 'Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat.',
        },

      ]);
      const colors = select('Focus colors', ['', 'card--image-focus--col-brand', 'card--image-focus--col-white'], 'card--image-focus--col-white');
      const bgColors = select('BG', ['bg-white', 'bg-alt', 'bg-inverted'], 'bg-inverted');
      const element = select('Element', ['a', 'div'], 'div');

      return {
        components: { ListItem, CardFocusImages },
        template: `
          <section-wrap style="background-image: url('http://about-us-unimelb.netlify.com/images/UoM-soft-3.png')" small class="${bgColors} text-center ">
            ${items.map(item => `<CardFocusImages element="${element}" fullImg hero titleabove class="${colors}" thumb="${item.thumb}" title="Postera crescam laude" />`).join('')}
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Focus box ( 2 col )',
    () => {
      const items = object('Items', [
        {
          title: 'Learning and teaching',
          thumb: 'http://about-us-unimelb.netlify.com/images/working-with-us/careers/ParkvilleBotany.jpg',
          excerpt: `<p>Lorem ipsum dolor sit amet officia eum laboriosam libero, adipisci, ab repellat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ducimus aperiam qui, numquam deleniti repudiandae quos, mollitia.</p>
                  <ul>
                    <li>
                      Improve the retention and promotion of women and gender minorities in&nbsp;Science, Technology, Engineering, Maths and Medicine (STEMM)&nbsp;
                    </li>
                    <li>
                      Advancing gender equality in academia&nbsp;
                    </li>
                    <li>
                      Addressing the loss of women across the career pipeline&nbsp;
                    </li>
                    <li>
                      Tackling gender pay gaps&nbsp;
                    </li>
                    <li>
                      Removing obstacles faced by women&nbsp;
                    </li>
                    <li>
                      Making sustainable structural and cultural changes to advance gender equality&nbsp;
                    </li>
                  </ul>
                  <p>laudantium autem cupiditate quisquam magnam nobis corporis vitae ipsa aut eligendi iste facilis.</p>`,
        },
        {
          title: 'Option 2',
          thumb: 'http://about-us-unimelb.netlify.com/images/working-with-us/careers/SouthbankGrounds3.jpg',
          excerpt: 'Lorem ipsum dolor sit amet Obcaecati vel delectus necessitatibus et, quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusantium, in eos eum ipsum et quia aliquam. A excepturi dolore alias dolor soluta modi. Hic laborum animi accusantium quos est?',
        },

      ]);
      const colors = select('Focus colors', ['', 'card--image-focus--col-brand', 'card--image-focus--col-white'], '');
      const bgColors = select('Card BG', ['bg-white', 'bg-alt', 'bg-inverted'], 'bg-alt');
      const element = select('Element', ['a', 'div'], 'div');

      return {
        components: { ListItem, CardFocusImages },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 class="heading-section text-center">Two column listing</h3>

            <div class="listing listing--two">
              ${items.map(item => `
                <ListItem>
                  <CardFocusImages fullImg element="${element}" class="${colors} ${bgColors}" thumb="${item.thumb}" title="${item.title}" titleabove excerpt="${item.excerpt}" />
                </ListItem>
              `).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Fact',
    () => {
      const items = object('Items', [
        {
          title: '666',
          meta: 'Million people',
          class: '',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of2',
          excerpt: 'Lorem ipsum dolor sit amet.',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of2',
          excerpt: 'Lorem ipsum dolor sit amet.',
        },
        {
          title: 'Longer, detailed stat',
          meta: 'Research facility',
          class: 'list-item--desk-2of3',
          smlHeader: true,
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Longer, detailed',
          meta: 'Research facility',
          class: 'list-item--desk-1of3',
          smlHeader: true,
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of3',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-2of3',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of4',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of4',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of4',
        },
        {
          title: 'No. 1',
          meta: 'Research facility',
          class: 'list-item--desk-1of4',
        },
      ]);
      return {
        components: { ListItem, CardFact },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Fact cards</h3>
            <p>Stats</p>
            <div class="listing">
              ${items.map(item => `<ListItem class="${item.class}"><CardFact class="bg-white" ${item.smlHeader ? 'smlHeader="true"' : ''} meta="${item.meta}" title="${item.title}" excerpt="${typeof item.excerpt !== 'undefined' ? item.excerpt : ''}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Division',
    () => {
      const items = object('Items', [
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Research Infrastructure and Systems',
          subtitle: 'Professor John Doggeton',
          meta: 'Pro Vice-Chancellor (Research Infrastructure & Systems)',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet',
        },
      ]);
      return {
        components: { ListItem, CardDivision },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Division card</h3>
            <div class="listing listing--three">
              ${items.map(item => `<ListItem><CardDivision class="bg-white" meta="${item.meta}" title="${item.title}" subtitle="${item.subtitle}" excerpt="${item.excerpt}" /></ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Division Head - 3 col',
    () => {
      const items = object('Items', [
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Research Infrastructure and Systems',
          subtitle: 'Professor John Doggeton',
          meta: 'Pro Vice-Chancellor (Research Infrastructure & Systems)',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet',
        },
      ]);
      return {
        components: { ListItem, CardDivisionHead },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Division card</h3>
            <div class="listing listing--three">
              ${items.map(item => `
                <ListItem>
                  <CardDivisionHead class="bg-white" meta="${item.meta}" :cols="3" title="${item.title}" subtitle="${item.subtitle}" excerpt="${item.excerpt}" />
                </ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Division Head - Compact',
    () => {
      const items = object('Items', [
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Research Infrastructure and Systems',
          subtitle: 'Professor John Doggeton',
          meta: 'Pro Vice-Chancellor (Research Infrastructure & Systems)',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident iure fugit, veritatis, delectus numquam.',
        },
      ]);
      return {
        components: { ListItem, CardDivisionHead },
        template: `
          <section-wrap class="bg-alt text-center">
            <h3 style="text-align: center;" class="heading-section">Division card</h3>
            <div class="listing listing--three listing--center">
              ${items.map(item => `
                <ListItem>
                  <CardDivisionHead class="bg-white" meta="${item.meta}" :cols="3" title="${item.title}" subtitle="${item.subtitle}" compact excerpt="" />
                </ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add(
    'Card - Division Head - 1 col',
    () => {
      const items = object('Items', [
        {
          title: 'Enterprise',
          subtitle: 'John Citizen',
          meta: 'Vice-Principal Enterprise',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
        },
        {
          title: 'Research Infrastructure and Systems',
          subtitle: 'Professor John Doggeton',
          meta: 'Pro Vice-Chancellor (Research Infrastructure & Systems)',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident iure fugit, veritatis, delectus numquam.',
        },
      ]);
      return {
        components: { ListItem, CardDivisionHead },
        template: `
          <section-wrap class="bg-alt text-center">
            <div class="listing listing--one">
              ${items.map(item => `
                <ListItem>
                  <CardDivisionHead class="bg-alt" meta="${item.meta}" :cols="1" title="${item.title}" subtitle="${item.subtitle}" excerpt="${item.excerpt}" />
                </ListItem>`).join('')}
            </div>
          </section-wrap>
        `,
      };
    }
  )
  .add('Card - Bio Header', () => {
    const items = object('Items', [
      {
        title: 'Enterprise',
        subtitle: 'Professor Glyn Davis AC',
        meta: 'Vice-Principal Enterprise',
        thumb: 'http://about-us-unimelb.netlify.com/images/leadership/senior-leadership/Glyn-Davis.jpg',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores aut eligendi vero. Provident repudiandae cupiditate at rerum eos, adipisci expedita dolore accusantium labore unde iure fugit, veritatis, delectus numquam.',
      },
    ]);
    const small = boolean('Small Section', true);
    return {
      components: { ListItem, CardDivisionHead },
      template: `
        <div>
        <section-wrap ${small ? 'small' : ''} class="bg-alt text-center">
          <div class="listing listing--one">
            ${items.map(item => `
              <ListItem>
                <div href="#" class="btn-owner card card--division card--division--head card--bdr">
                  <div class="card__thumb" >
                    <img src="${item.thumb}" alt="">
                  </div>
                  <div class="card__inner ">
                    <div class="card__subheader">
                      <h3 class="card__header">${item.subtitle}</h3>
                      <p class="card__meta">${item.meta}</p>
                    </div>
                    <hr>
                    <p>${item.excerpt}</p>
                  </div>
                </div>
              </ListItem>`).join('')}
          </div>
        </section-wrap>
        <section-wrap ${small ? 'small' : ''}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A esse veniam, adipisci sed cumque. Commodi nulla necessitatibus maxime, reprehenderit eaque delectus repellat repellendus, ullam, dolor quod unde, facilis accusamus ex.
        </section-wrap>
        </div>
      `,
    };
  });

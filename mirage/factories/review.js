import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  reviewer() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  imageUrl() {
    return 'images/review-person3.png';
  },

  text() {
    return faker.lorem.sentence();
  },

  source() {
    return faker.random.arrayElement(['Trip Advisor Contributor', 'Yelp Contributor']);
  },

  url() {
    return faker.internet.url();
  },
});

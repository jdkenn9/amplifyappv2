// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ratings, Business, User, Address } = initSchema(schema);

export {
  Ratings,
  Business,
  User,
  Address
};
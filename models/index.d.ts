import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type EagerAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

type LazyAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type RatingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRatings = {
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly DateLeft?: string | null;
  readonly userID: string;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRatings = {
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly DateLeft?: string | null;
  readonly userID: string;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ratings = LazyLoading extends LazyLoadingDisabled ? EagerRatings : LazyRatings

export declare const Ratings: (new (init: ModelInit<Ratings, RatingsMetaData>) => Ratings) & {
  copyOf(source: Ratings, mutator: (draft: MutableModel<Ratings, RatingsMetaData>) => MutableModel<Ratings, RatingsMetaData> | void): Ratings;
}

type EagerBusiness = {
  readonly id: string;
  readonly userID: string;
  readonly Owner?: string | null;
  readonly Name?: string | null;
  readonly TotalReviews?: number | null;
  readonly Rating?: number | null;
  readonly Address?: Address | null;
  readonly Hours?: string | null;
  readonly BusinessesRatings?: (Ratings | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusiness = {
  readonly id: string;
  readonly userID: string;
  readonly Owner?: string | null;
  readonly Name?: string | null;
  readonly TotalReviews?: number | null;
  readonly Rating?: number | null;
  readonly Address?: Address | null;
  readonly Hours?: string | null;
  readonly BusinessesRatings: AsyncCollection<Ratings>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business, BusinessMetaData>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}

type EagerUser = {
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly Owner?: boolean | null;
  readonly OwnedBusiness?: (Business | null)[] | null;
  readonly UsersRating?: (Ratings | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly Owner?: boolean | null;
  readonly OwnedBusiness: AsyncCollection<Business>;
  readonly UsersRating: AsyncCollection<Ratings>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
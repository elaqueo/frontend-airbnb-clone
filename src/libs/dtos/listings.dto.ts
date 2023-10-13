import { Country } from '../models/countries';

export type ListingCreateDto = {
  category: string;
  location: Country | null;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
};

export const listingMakeDefault = (): ListingCreateDto => ({
  category: '',
  location: null,
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
  imageSrc: '',
  price: 1,
  title: '',
  description: '',
});

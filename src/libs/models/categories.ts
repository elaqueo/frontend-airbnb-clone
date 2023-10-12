export type Category = {
  label: string;
  icon: string;
  description: string;
};

export const categories: Category[] = [
  { label: 'Beach', icon: 'tabler:beach', description: 'This property is close to the beach' },
  { label: 'Windmills', icon: 'tabler:windmill', description: 'This property has windmills' },
  { label: 'Modern', icon: 'material-symbols:villa-outline-rounded', description: 'This property is modern' },
];

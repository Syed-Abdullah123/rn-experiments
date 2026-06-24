import { ShimmerIcon } from '../../assets/icons/ShimmerIcon';

export type ComponentEntry = {
  id: string;
  label: string;
  Icon: React.FC<{ color?: string }>;
  color: string;
  screen: string; // matches the route name
};

export const COMPONENTS: ComponentEntry[] = [
  {
    id: 'shimmer',
    label: 'Shimmer Loader',
    Icon: ShimmerIcon,
    color: '#6366f1',
    screen: 'ShimmerLoaderDemo',
  },
];
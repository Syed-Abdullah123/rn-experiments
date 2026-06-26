import { ShimmerIcon } from '../../assets/icons/ShimmerIcon';
import NewtonsCradleIcon from '../../assets/icons/NewtonsCradleIcon';

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
  {
    id: 'cradle',
    label: "Newton's Cradle",
    Icon: NewtonsCradleIcon,
    color: '#f59e0b',
    screen: 'NewtonsCradleDemo',
  },
];
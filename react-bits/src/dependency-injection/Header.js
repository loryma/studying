import inject from './inject';
import Title from './Title';

var EnhancedTitle = inject(Title)
export default function Header() {
  return (
    <header>
      <EnhancedTitle />
    </header>
  )
};
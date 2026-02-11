import sharedContent from '../../content/shared.json';

interface NavigationProps {
  currentPath: string;
  className?: string;
}

export default function Navigation({ currentPath, className = '' }: NavigationProps) {
  const navItems = sharedContent.navigation;

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className={`flex items-center gap-1 ${className}`}>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
            isActive(item.href)
              ? 'text-primary font-semibold border-b-2 border-primary'
              : 'text-dark hover:text-primary hover:bg-light'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

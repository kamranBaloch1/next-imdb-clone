import NavbarItemSuspenseWrapper from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItemSuspenseWrapper title='Trending' param='fetchTrending' />
      <NavbarItemSuspenseWrapper title='Top Rated' param='fetchTopRated' />
    </div>
  );
}
'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ModeToggle } from '@/app/(dashboard)/_components/themeChanger';
import SearchInput from '@/components/search-input';
import { Button } from '@/components/ui/button';
import { isTeacher } from '@/lib/teacher';

const NavbarRoutes = () => {
  const pathname = usePathname();

  const { userId } = useAuth();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isCoursePage = pathname?.includes('/courses');
  const isSearchPage = pathname === '/search';

  return (
    <>
      {isSearchPage && (
        <div className='hidden md:block'>
          <SearchInput />
        </div>
      )}
      <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isCoursePage ? (
          <Link href='/'>
            <Button size='sm' variant='ghost'>
              <LogOut className='h-4 w-4 mr-2' />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href='/teacher/courses'>
            <Button size='sm' variant='ghost'>
              Teacher mode
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl='/' />
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;

/* eslint-disable react/jsx-no-useless-fragment */
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { isTeacher } from '@/lib/teacher';

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  return <>{children}</>;
};

export default TeacherLayout;

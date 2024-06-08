import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import db from '@/lib/prismadb';
import { columns } from './_components/column';
import { DataTable } from './_components/data-table';

const CoursesPage = async ({ params }: {
  params: { courseId: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const courses = await db.course.findMany({
    where: {
      id: params.courseId
    },
  });

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;

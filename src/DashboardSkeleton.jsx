import React from 'react';
import { Skeleton } from './components/ui/skeleton';

function DashboardSkeleton() {
    return (
        <div className="m-5 flex flex-col md:flex-row gap-4 p-3">
            <div className="w-full md:w-[20vw]">
                <Skeleton className="h-[30vh] md:h-[103vh] rounded-md" />
            </div>
            <div className="w-full md:w-[60vw] flex flex-col">
                <div className='p-3 m-1 rounded-md bg-gray-50'>
                    <div>
                        <Skeleton className="h-[38vh] rounded-md" />
                        <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
                            <Skeleton className="h-[28vh] w-full md:w-[20vw] rounded-md" />
                            <Skeleton className="h-[28vh] w-full md:w-[20vw] rounded-md" />
                            <Skeleton className="h-[28vh] w-full md:w-[20vw] rounded-md" />
                        </div>
                    </div>
                </div>
                <Skeleton className="h-[30vh] rounded-md" />
            </div>
            <div className="w-full md:w-[20vw] flex flex-col gap-4">
                <Skeleton className="h-[30vh] md:h-[70vh] rounded-md" />
                <Skeleton className="h-[30vh] rounded-md" />
            </div>
        </div>
    );
}

export default DashboardSkeleton;

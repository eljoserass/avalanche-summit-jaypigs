interface tokenCardSkeletonProps {
  total: number;
}

const TokenCardSkeleton = ({ total }: tokenCardSkeletonProps) => {
  return (
    <>
      {new Array(total).fill(1).map((item, index) => (
        <div
          className="rounded-md border border-solid border-dark-100 p-2 dark:border-dark-400"
          key={index}
        >
          <div className="mb-2 h-6 w-1/3 animate-pulse rounded-sm bg-gray-600"></div>
          <div className="h-48 animate-pulse rounded-tr rounded-tl bg-gray-600"></div>

          <div className="pt-2 pb-6">
            <div className="mb-3 h-4 animate-pulse rounded-sm bg-gray-600"></div>
            <div className="h-6 animate-pulse rounded-sm bg-gray-600"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TokenCardSkeleton;

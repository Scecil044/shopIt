import { Skeleton, Stack } from "@chakra-ui/react";

export default function SearchSkeleton() {
  return (
    <div className="mt-5">
      <div className="mb-2">
        <Stack>
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </Stack>
      </div>
      <div className="mt-3">
        <Stack>
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </Stack>
      </div>
    </div>
  );
}

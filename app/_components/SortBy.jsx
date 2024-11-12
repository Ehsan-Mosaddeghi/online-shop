"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function SortBy() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleParams(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Select onValueChange={(value) => handleParams(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="highest-price">Highest price</SelectItem>
          <SelectItem value="lowest-price">Lowest price</SelectItem>
          <SelectItem value="most-rated">Rates</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

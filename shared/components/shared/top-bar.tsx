import React from "react";
import { Categories } from "./categories";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";
import { cn } from "@/shared/lib/utils";

type Props = {
  categories: Category[];
  className?: string;
};

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between pb-4">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};

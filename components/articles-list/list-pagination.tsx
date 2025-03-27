import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "#/components/ui/pagination";
import { cn } from "#/lib/utils";

interface ListPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  className?: string;
}

const ListPagination = (props: ListPaginationProps) => {
  const { totalItems, itemsPerPage, currentPage, className } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const delta = 2; // Number of pages to show before and after current page

    // Always include first page
    if (currentPage > delta + 1) {
      pageNumbers.push(1);
    }

    // Add ellipsis if there's a gap after first page
    if (currentPage > delta + 2) {
      pageNumbers.push("ellipsis-start");
    }

    // Calculate start and end of page numbers around current page
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    // Add the page numbers around current page
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis if there's a gap before last page
    if (currentPage < totalPages - delta - 1) {
      pageNumbers.push("ellipsis-end");
    }

    // Always include last page
    if (currentPage < totalPages - delta && totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <Pagination className={cn("mt-8 pb-8", className)}>
      <PaginationContent>
        {/* Previous button - always visible */}
        <PaginationItem>
          <PaginationPrevious
            href={isPreviousDisabled ? "#" : `?page=${currentPage - 1}`}
            className={
              isPreviousDisabled ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Mobile view - just show current page */}
        <PaginationItem className="md:hidden">
          <PaginationLink href="#" isActive={true}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {/* Desktop view - show page range */}
        {pageNumbers.map((page, index) =>
          page === "ellipsis-start" || page === "ellipsis-end" ? (
            <PaginationItem key={`${page}-${index}`} className="hidden md:flex">
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={index} className="hidden md:flex">
              <PaginationLink
                href={`?page=${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {/* Next button - always visible */}
        <PaginationItem>
          <PaginationNext
            href={isNextDisabled ? "#" : `?page=${currentPage + 1}`}
            className={isNextDisabled ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ListPagination;

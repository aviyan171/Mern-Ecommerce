import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadCnPagination
} from './shadcn-components/ShadCnPagination'

export function Pagination({
  onNextClick,
  onPreviousClick,
  isNextDisabled,
  isPreviousDisabled
}: {
  onNextClick: VoidFunction
  onPreviousClick: VoidFunction
  isNextDisabled: boolean
  isPreviousDisabled: boolean
}) {
  return (
    <ShadCnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${isPreviousDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${
              isPreviousDisabled ? 'font-extralight' : 'font-normal'
            }`}
            onClick={isPreviousDisabled ? undefined : onPreviousClick}
          />
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink className='cursor-pointer'>1</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            className={`${isNextDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${isNextDisabled ? 'font-extralight' : 'font-normal'}`}
            onClick={isNextDisabled ? undefined : onNextClick}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadCnPagination>
  )
}

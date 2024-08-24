import { Pagination } from 'shared/components/Pagination'
import { useCategoryProduct } from '../hooks/useCategoryProduct'
import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from 'shared/store/hooks'
import { selectFilter } from '../store/ProductCategoryFilterSlice'

export function CategoryPagination() {
  const { totalPage, changeFilters } = useCategoryProduct()
  const currentPage = useAppSelector(selectFilter).page
  const pageRef = useRef(1)
  const [curr, setCur] = useState(1)
  console.log({ totalPage })

  // Go to the next page
  const onNextClick = () => {
    setCur(prev => prev + 1)
    changeFilters({
      page: (pageRef.current += 1)
    })
  }

  // Go to the previous page
  const onPreviousClick = () => {
    setCur(prev => prev - 1)
    changeFilters({
      page: (pageRef.current -= 1)
    })
  }

  console.log(curr, 'curr')

  return (
    <div>
      <Pagination
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        isNextDisabled={pageRef.current === totalPage}
        isPreviousDisabled={pageRef.current === 1}
      />
    </div>
  )
}

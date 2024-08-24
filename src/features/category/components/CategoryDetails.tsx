import MaxWidthLayout from 'shared/layout/MaxWidthLayout'
import CategoryBar from './CategoryBar'
import CategoryResults from './CategoryResults'

function CategoryDetails() {
  return (
    <div className="py-25">
      <MaxWidthLayout>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <CategoryBar />
          </div>
          <div className="col-span-2 ">
            <div className="flex justify-center items-center">
              <CategoryResults />
            </div>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  )
}

export default CategoryDetails

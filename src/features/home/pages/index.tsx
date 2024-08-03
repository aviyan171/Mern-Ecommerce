import Banner from '../components/Banner/Banner'
import CoverPage from '../components/cover-page/CoverPage'
import ProductListing from '../components/product-listing/ProductListing'

function Home() {
  return (
    <div>
      <CoverPage />
      <Banner />
      <ProductListing />
    </div>
  )
}

export default Home

import styles from '../../ui/dashboard/products/products.module.css'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import Link from 'next/link'
import Search from '../../ui/dashboard/searchComponent/Search'
import Image from 'next/image'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add Product</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Samsung
              </div>
            </td>
            <td>Desc</td>
            <td>56000</td>
            <td>28.07.2025</td>
            <td>24</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.viewButton}`}>View</button>
                </Link>

                <button className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />

    </div>
  )
}

export default ProductsPage
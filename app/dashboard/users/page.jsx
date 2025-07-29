import Link from "next/link"
import Search from "../../ui/dashboard/searchComponent/Search"
import styles from "../../ui/dashboard/users/users.module.css"
import Image from "next/image"
import Pagination from "../../ui/dashboard/pagination/Pagination"

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>28.07.2025</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/1">
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

export default UsersPage
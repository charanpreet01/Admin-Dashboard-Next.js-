import Link from "next/link"
import Search from "../../ui/dashboard/searchComponent/Search"
import styles from "../../ui/dashboard/users/users.module.css"
import Image from "next/image"
import Pagination from "../../ui/dashboard/pagination/Pagination"
import { fetchUsers } from "../../lib/data"

const UsersPage = async () => {

  const users = await fetchUsers();
  console.log("All users: ", users);

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
          {users.map(user => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.viewButton}`}>View</button>
                  </Link>

                  <button className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      <Pagination />

    </div>
  )
}

export default UsersPage
import Image from 'next/image'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' alt='Uses Avatar' fill />
                </div>
                John Doe
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name='username' placeholder='John Doe' />
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Johndoe@gmail.com' />
                    <label>Password</label>
                    <input type="password" name='password' />
                    <label>Phone</label>
                    <input type="phone" name='phone' placeholder='923823234' />
                    <label>Address</label>
                    <textarea name="address" id="address" placeholder='Address'></textarea>
                    <label>is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
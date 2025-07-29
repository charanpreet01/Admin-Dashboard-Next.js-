import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder='Username' name='username' />
            <input type="email" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <input type="phone" placeholder='Phone' name='phone' />
            <select name="isAdmin" id="isAdmin">
                <option value={false} selected>is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={true} selected>is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea name="address" id="address" rows={18} placeholder='Address'></textarea>
            <button type='submit'>Submit</button>
        
       </form>
    </div>
  )
}

export default AddUserPage
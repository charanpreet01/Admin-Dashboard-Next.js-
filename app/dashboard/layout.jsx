import styles from '../ui/dashboard/dashboard.module.css'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'

const layout = ({ children }) => {
    return (
        <div className={styles.container}>

            <div className={styles.menu}>
                <Sidebar />
            </div>

            <div className={styles.context}>
                <Navbar />
                {children}
            </div>
            
        </div>
    )
}

export default layout
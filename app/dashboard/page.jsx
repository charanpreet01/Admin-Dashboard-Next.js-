import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/Card'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/charts/Chart'
import RightBar from '../ui/dashboard/rightBar/RightBar'

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />
        <Chart />
      </div>

      <div className={styles.side}>
        <RightBar />
      </div>

    </div>
  )
}

export default DashBoard
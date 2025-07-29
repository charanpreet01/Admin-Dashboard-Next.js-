import Image from 'next/image'
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noproduct.jpg' alt='Uses Avatar' fill />
                </div>
                Samsung
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Samsung' />
                    <label>Price</label>
                    <input type="number" name='price' placeholder='56000' />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='45' />
                    <label>Color</label>
                    <input type="text" name='color' placeholder='white' />
                    <label>Size</label>
                    <input type="text" name='size' placeholder='Ultra' />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="phone" selected>Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" row={10} placeholder='Description'></textarea>

                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage
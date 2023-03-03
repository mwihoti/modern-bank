import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';


const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card Deal <br className="sm:block hidden" /> In few steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Find Card Dealer stock images in HD and millions of other 
          royalty-free stock photos, illustrations and 
          vectors in the Shutterstock collection.
          </p>
          <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card}alt="card" className="w-[100%] h-[100%]"/>

      </div>
    </section>
  )

export default CardDeal

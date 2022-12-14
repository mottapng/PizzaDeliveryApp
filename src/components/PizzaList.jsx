import styles from "../styles/PizzaList.module.scss"
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST HOMEMADE PIZZA IN TOWN</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus augue neque, ut accumsan
        libero eleifend ac. Fusce non quam est. In hac habitasse platea dictumst. Vivamus congue dui quam,
        a hendrerit ipsum porttitor volutpat.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default PizzaList
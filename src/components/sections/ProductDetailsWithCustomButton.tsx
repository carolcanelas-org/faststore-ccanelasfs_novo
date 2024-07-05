import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
import styles from './buy-button.module.scss'

const ProductDetailsWithCustomButton = getOverriddenSection({
Section: ProductDetailsSection,
className: styles.buyButton,
components: {
    BuyButton: { props: { size: "small", iconPosition: "right" } } 
},
})

export default ProductDetailsWithCustomButton;
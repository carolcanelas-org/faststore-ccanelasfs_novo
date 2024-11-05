import { ProductDetailsSection, getOverriddenSection } from "@faststore/core";
import styles from "./customPrice.module.scss";
import CustomPrice from "./Price";

const ProductDetailsWithCustomButton = getOverriddenSection({
  Section: ProductDetailsSection,
  className: styles.customPrice,
  components: {
    ProductPrice: {
      Component: CustomPrice,
    },
  },
});
export default ProductDetailsWithCustomButton;

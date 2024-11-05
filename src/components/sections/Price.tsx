import { Price } from "@faststore/ui";

const CustomPrice = () => {
  return (
    <Price
      value={62}
      formatter={function useIntlPartsFormatter(price) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        })
          .formatToParts(price)
          .map((part) => {
            const props = {
              [`data-fs-price-${part.type}`]: true,
            };
            return (
              <span key={part.type} {...props}>
                {part.value}
              </span>
            );
          });
      }}
    />
  );
};

export default CustomPrice;

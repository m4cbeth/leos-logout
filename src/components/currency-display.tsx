

export const CurrencyDisplay = ({amount}) => (
    amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
)
const formatter = Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
});

export default function formatMoney(cents) {
    return formatter.format(cents / 100);
}
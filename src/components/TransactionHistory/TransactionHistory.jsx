import s from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    console.log(items);

    return <table className={s.table}>
        <thead className={s.thead}>
            <tr className={s.tr}>
                <th className={s.th}>Type</th>
                <th className={s.th}>Amount</th>
                <th className={s.th}>Currency</th>
            </tr>
        </thead>

        <tbody className={s.tbody}>
            {items.map(({ id, type, amount, currency }) => (<tr key={id} className={s.tr}>
                <td className={s.td}>{type}</td>
                <td className={s.td}>{amount}</td>
                <td className={s.td}>{currency}</td>
            </tr>))}
        </tbody>
    </table>
}

export default TransactionHistory;
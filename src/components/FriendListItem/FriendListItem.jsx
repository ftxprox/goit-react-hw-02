import s from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ image, name, status }) => {
    return <div className={s.content}>
        <img src={image} alt="Avatar" width="48" className={s.img} />
        <p className={s.name}>{name}</p>
        <p className={clsx({
            [s.online]: status,
            [s.offline]: !status,
        })}>{status ? "Online" : "Offline"}</p>
    </div>
}

export default FriendListItem;
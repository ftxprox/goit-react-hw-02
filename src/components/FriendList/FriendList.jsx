import FriendListItem from "../FriendListItem/FriendListItem";
import s from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
    return <ul className={s.list}>
        {friends.map((friend) => (
            <li key={friend.id} className={s.item}>
                <FriendListItem image={friend.avatar} name={friend.name} status={friend.isOnline} />
            </li>
        ))}
    </ul>
}

export default FriendList;
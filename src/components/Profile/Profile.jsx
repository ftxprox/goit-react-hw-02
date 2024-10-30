import s from "../Profile/Profile.module.css"

const Profile = ({ name, image, tag, location, stats }) => (
	<div className={s.card}>
		<div className={s.top}>
			<img className={s.img}
				src={image}
				alt={`${name} avatar`}
			/>
			<p className={s.name}>{name}</p>
			<p className={s.description}>@{tag}</p>
			<p className={s.description}>{location}</p>
		</div>

		<ul className={s.list}>
			<li className={s.item}>
				<span className={s.statsTitle}>Followers</span>
				<span className={s.stats}>{stats.followers}</span>
			</li>
			<li className={s.item}>
				<span className={s.statsTitle}>Views</span>
				<span className={s.stats}>{stats.views}</span>
			</li>
			<li className={s.item}>
				<span className={s.statsTitle}>Likes</span>
				<span className={s.stats}>{stats.likes}</span>
			</li>
		</ul>
	</div>

);

export default Profile;
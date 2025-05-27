import st from './styles.module.scss';

export default function CurretWeatherPosition({ txt, positions, src, mark }) {
	return (
		<div className={st.position}>
			<p>{txt}</p>
			<p>
				{positions}
				{mark} <img className={st.icon} src={src} alt="*" />
			</p>
		</div>
	);
}

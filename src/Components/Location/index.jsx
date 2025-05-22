import st from './styles.module.scss';
import geo from '../../images/geolocation.svg';

export default function Location() {
	function handleClick() {
		const err = () => {
			console.log('mistake');
		};

		const success = (position) => {
			console.log(position);
			console.log(position.coords.latitude, position.coords.longitude);
		};

		navigator.geolocation.getCurrentPosition(success, err);
	}

	return (
		<div className={st.block}>
			<button className={st.btn} onClick={handleClick}>
				<p className={st.txt}>My location</p>
				<img src={geo} alt="*" />
			</button>
		</div>
	);
}

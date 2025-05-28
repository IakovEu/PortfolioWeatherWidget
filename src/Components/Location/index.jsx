import st from './styles.module.scss';
import geo from '../../images/geolocation.svg';

export default function Location({ data, onClick }) {
	// вытаскиваем данные для текущего прогноза
	const positions = {};

	if (Object.keys(data).length !== 0) {
		positions.temperature = Math.round(data.list[0].main.temp - 273.15);
		positions.city = data.city.name;
		positions.data = data.list[0].dt_txt
			.split(' ')[0]
			.split('-')
			.reverse()
			.join('.');
		positions.description = data.list[0].weather[0].description;
	}
	return (
		<div className={st.container}>
			<h1 className={st.title}>Weather Widget</h1>
			<div className={Object.keys(data).length === 0 ? st.block : st.none}>
				<button className={st.btn} onClick={onClick}>
					<p className={st.txt}>By location</p>
					<img src={geo} alt="*" />
				</button>
			</div>
			<div
				className={Object.keys(data).length !== 0 ? st.anotherBlock : st.none}>
				<div className={st.degrees}>{positions.temperature}&deg;</div>
				<div>
					<p className={st.city}>{positions.city}</p>
					<p className={st.data}>{positions.data}</p>
					<p className={st.description}>{positions.description}</p>
				</div>
				<button className={st.changedBtn} onClick={onClick}>
					<img src={geo} alt="*" />
				</button>
			</div>
		</div>
	);
}

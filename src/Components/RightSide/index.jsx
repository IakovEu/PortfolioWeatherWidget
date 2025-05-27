import st from './styles.module.scss';
import search from '../../images/search.svg';
import Forecast from '../Forecast';

export default function RightSide({ data, onClick, onChange, toggler, geo }) {
	return (
		<div className={st.weatherInfo}>
			<div className={st.form}>
				<input
					type="text"
					className={st.input}
					placeholder="Search Location..."
					maxLength="30"
				/>
				<button className={st.btn} onClick={onClick}>
					<img src={search} alt="*" />
				</button>
				<div className={st.question}>Request a 5 day forecast</div>
				<label className={st.switch}>
					<input type="checkbox" onChange={onChange} />
					<span className={st.slider}></span>
				</label>
			</div>
			<Forecast forecast={data} toggler={toggler} geo={geo}></Forecast>
		</div>
	);
}

import st from './styles.module.scss';
import search from'../../images/search.svg'
import Forecast from '../Forecast';

export default function RightSide() {
	function handleClick() {
		console.log(1);
	}

    function handleCheckboxChange(event){
        console.log(event.target.checked);
    }

	return (
		<div className={st.weatherInfo}>
			<div className={st.form}>
				<input
					type="text"
					className={st.input}
					placeholder="Search Location..."
				/>
				<button className={st.btn} onClick={handleClick}>
				<img src={search} alt="*"/>
				</button>
				<div className={st.question}>Request a 5 day forecast</div>
				<label className={st.switch}>
					<input type="checkbox" onChange={handleCheckboxChange}/>
					<span className={st.slider}></span>
				</label>
			</div>
            <Forecast/>
		</div>
	);
}

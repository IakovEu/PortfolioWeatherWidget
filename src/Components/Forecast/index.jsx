import st from './styles.module.scss';
import snow from '../../images/snow.svg'
import rain from '../../images/rain.svg'
import sun from '../../images/sun.svg'
import clouds from '../../images/clouds.svg'

export default function Forecast() {
	return (
		<div className={st.info}>
			<div className={st.details}>Weather Details...</div>
			<div className={st.beforeAnswer}>Information will be loaded here</div>
            <div className={st.imagesBeforeAnswer}>
                <img src={snow} alt="*" />
                <img src={rain} alt="*" />
                <img src={sun} alt="*" />
                <img src={clouds} alt="*" />
            </div>
		</div>
	);
}

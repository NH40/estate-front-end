import SearchBar from '../../components/searchBar/SearchBar'
import "./homePage.scss"

const HomePage = () => {
	return (
		<div className='homePage'>
			<div className="textContainer">
				<div className="wrapper">
					<h1 className='title'>Найдите недвижимость и приобретите жилье своей мечты</h1>

					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nostrum odio dolorem, maiores in repudiandae illum architecto reiciendis autem debitis, ullam labore omnis iusto cum assumenda! Saepe rem impedit vel.
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Многолетний опыт работы</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Полученных наград</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Готовой недвижимости</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="" />
			</div>
		</div>
	)
}

export default HomePage

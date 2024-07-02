import { useState } from 'react'
import "./searchBar.scss"

const types = ["buy", "rent"]

const SearchBar = () => {
	const [query, setQuery] = useState({
		type: "buy",
		location: "",
		minPrice: 0,
		maxPrice: 0,
	})

	const switchType = (val) => {
		setQuery((prev) => ({...prev, type:val}))
	}

	return (
		<div className='SearchBar'>
			<div className="type">
				{types.map((type) => (
					<button key={type} className={query.type === type ? "active" : ""} onClick={() => switchType(type)}>
						{type === "buy" ? "Покупка" : "Аренда"}
					</button>
				))}
			</div>
			<form>
				<input type="text" name='location' placeholder='Локация в городе'/>
				<input type="number" name='minPrice'min={0} max={10000000} placeholder='Минимальная цена'/>
				<input type="number" name='maxPrice' min={0} max={100000000} placeholder='Максимальная цена'/>
				<button>
					<img src="/search.png" alt="" />
				</button>
			</form>
		</div>
	)
}

export default SearchBar

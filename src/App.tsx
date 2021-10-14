import { useState, useEffect } from 'react'

import './styles/global.css'

function App() {
	const [name, setName] = useState<string | null>()

	useEffect(() => {
		let visitorName

		while (visitorName === undefined || visitorName === null || visitorName === '') {
			visitorName = prompt('Olá, digite o seu nome')
		}

		alert(`Seja bem vindo ${visitorName}!`)

		setName(visitorName)
	}, [])

	return (
		<div>
			<h1>Manicure</h1>

			<p>Seja bem vindo {name}! Abaixo segue nossos serviços</p>

			<h3>Lista de serviços:</h3>

			<table>
				<thead>
					<tr>
						<th>Serviço</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Unhas de gel</td>
						<td>R$ 300,00</td>
					</tr>
					<tr>
						<td>Pintura</td>
						<td>R$ 30,00</td>
					</tr>
					<tr>
						<td>Cutícula</td>
						<td>R$ 15,00</td>
					</tr>
					<tr>
						<td>Alongamento</td>
						<td>R$ 150,00</td>
					</tr>
					<tr>
						<td>Podologia</td>
						<td>R$ 180,00</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default App

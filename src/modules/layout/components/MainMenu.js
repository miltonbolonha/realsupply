import { React } from '../dependencies'

const MainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/rgb">
					DDW
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/producao-audiovisual">
					Estruturar
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/producao-audiovisual">
					Escrever
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/producao-audiovisual">
					Sequenciar (versionar)
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/rgb">
					RGB
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/producao-audiovisual">
					Produção Audiovisual
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/fornecedores">
					Fornecedores
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/recursos-graficos">
					Recursos Gráficos
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/meme">
					Mesmerize
					<br />- Meme
					<br />- gif
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/temas-causas">
					Temas e Causas
				</a>
			</li>
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/criancas">
					Crianças
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/educacao">
					Educação 3.0
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/cmyk">
					CMYK
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/impressos">
					Impressos
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/adesivos">
					Adesivos
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/timbrado-docs">
					Timbrados e Docs
				</a>
			</li>
		</ul>
	</nav>
)

export default MainMenu

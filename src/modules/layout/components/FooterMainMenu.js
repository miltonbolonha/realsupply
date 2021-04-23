import { React } from '../dependencies'

const FooterMainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav
		ref={wrapperRef}
		className={' main-nav-footer menu-footer-state-' + isVisibleClass}
	>
		<ul className="nav-footer-menus">
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/milteam">
					MilTeam
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/sistema-bolonha">
					Sistema Bolonha 3.0
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/preparacao">
					Preparação
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/conte-uma-historia">
					Conte uma História
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/wiki/tom-aviso">
					Tom Realista
				</a>
			</li>
		</ul>
		<ul className="nav-footer-menus">
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/home">
					Manual de Campanha
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/instrucoes-iniciais">
					Instruções Iniciais
				</a>
			</li>

			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/panorama-telas">
					Panorâma Geral e Telas
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/arquivos-documentos">
					Arquivos e Documentos
				</a>
			</li>
		</ul>
	</nav>
)

export default FooterMainMenu

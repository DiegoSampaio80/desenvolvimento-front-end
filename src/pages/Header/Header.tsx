import './style'
const Header = () => (
    <div>
        <header>
            <nav>
                <div id="brand">
                    <img src="" alt="logo" />
                </div>
                <div id="areaMenuButton">
                    <span id="buttonMenu" class="material-symbols-outlined">
                        menu
                    </span>
                </div>
                <div id="dropdown">
                    <div id="areaLinks">
                        <div id="links">
                            <ul>
                                <li>
                                    <a href="">Novos em</a>
                                </li>
                                <li>
                                    <a id="linkRed" href="">Mais Populares</a>
                                </li>
                                <li>
                                    <a href="">Marca</a>
                                </li>
                            </ul>
                        </div>
                        <div id="search">
                            <form action="" method="get">
                                <input type="text" name="" id="" placeholder="Buscar" />
                                <button type="button">
                                    <span class="material-symbols-outlined">
                                        search
                                    </span>
                                </button>
                            </form>
                        </div>
                        <div id="services">
                            <ul>
                                <li>
                                    <a href="">
                                        <span class="material-symbols-outlined">
                                            person
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="material-symbols-outlined">
                                            shopping_cart
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
);

export default Header;
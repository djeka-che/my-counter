import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)

    function plus() {
        setCounter(counter + 1)
    }

    function minus() {
        setCounter(counter - 1)
        if (counter <= 0) {
            setCounter(0)
        }
    }

    function reset() {
        setCounter(0)
    }

    return (
        <div className="App">
            <body/>
            <header>
                <div className='Header1'>
                    <div className='Logo'>
                        <img src='my-img/Group.png' alt='Counter'/>
                    </div>
                    <div className='Menu'>
                        <ul>
                            <li>Главная</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className='Number'>
                    <div className='counter'>
                        {counter}
                    </div>
                    <div className='Buttons'>
                        <button onClick={plus} className='BlueButton'>
                            Увеличить
                        </button>
                        <button onClick={minus} className='OrangeButton'>
                            Уменьшить
                        </button>
                        <button onClick={reset} className='GreyButton'>
                            Сбросить
                        </button>
                    </div>
                </div>
            </main>
            <footer>
                <div className='FooterCont'>
                    <div className='LOGO'>
                        <img src='my-img/Group11.svg' alt='Group'/>
                        <ul className='FooterMenu'>
                            <li>Главная</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className='FooterPast'>
                        <p>OOO "интукод", 2020г.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

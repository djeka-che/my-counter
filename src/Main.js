import {useState} from "react";

function Main() {
    const [counter, setCounter] = useState(0)

    function plus() {
        setCounter(counter + 3)
    }

    function minus() {
        setCounter(counter - 2)
        if (counter <= 0) {
            setCounter(0)
        }
    }

    function reset() {
        setCounter(0)
    }

    return (
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
    )
}

export default Main
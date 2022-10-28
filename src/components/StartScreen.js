import './StartScreen.css';

const StartScreen = ({startGame}) => {
    return(
        <div className="start">
            <h1>Palavras Secretas</h1>
            <p>Clique no botão abaixo para jogar by: DanielDev</p>
            <button onClick={startGame}>Começar a jogar</button>
        </div>
    )
};

export default StartScreen;
import styled from 'styled-components';
import Player from './audio/Player';
import PlayerIcon from './audio/PlayerIcon';

const App = () => {
    return (
        <Container>
            <PlayerIcon />
            <Player />
        </Container>
    )
}

export default App

const Container = styled.div`
    position : relative;
    width    : 100vw;
    height   : 100vh;
`
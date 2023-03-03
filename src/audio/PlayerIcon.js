import React from 'react'
import styled from 'styled-components'
import Icon from '../icons/Icon'
import { PlayerContext } from '../PlayerContext'

const PlayerIcon = () => {
    const { track, timeRange, onPlay, onPause } = React.useContext(PlayerContext)

    return (
        <AudioIcon className='__audio'>
            {!track.isPlaying ? (
                <Icon name='Play'
                    className='audio__item-play'
                    onClick={() => onPlay()}
                />
            ) : (
                <Icon name='Pause'
                    className='audio__item-pause'
                    onClick={() => onPause()}
                />
            )}
            <svg className="track" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="22.5"
                    strokeDashoffset={(141.37 - ((timeRange.currentTime / timeRange.duration * 100) * 1.4137)) || 141.37}
                />
            </svg>
        </AudioIcon>
    )
}

export default PlayerIcon

const AudioIcon = styled.div`
    position         : absolute;
    top              : 30vh;
    left             : 50%;
    height           : 36px;
    width            : 36px;
    color            : var(--svg);
    background-color : rgba(var(--primary-rgb), 0.12);
    border-radius    : var(--rounded-full);
    margin-left      : 8px;
    transform        : translateX(-50%) scale(2);
    cursor           : pointer;

    &:hover {
        background-color : rgba(var(--primary-rgb), 0.17);
    }

    .audio__item-play,
    .audio__item-pause {
        position  : absolute;
        top       : 50%;
        left      : 50%;
        transform : translate(-50%, -50%);
        height    : 22px;
        width     : 22px;
        color     : var(--primary);
        z-index   : 1;
    }
    .audio__item-play {
        left   : 55%;
        height : 19px;
        width  : 19px;
    }

    .track {
        position  : relative;
        fill      : none;
        transform : rotate(-90deg);
        z-index   : 0;

        circle {
            stroke            : var(--primary);
            stroke-width      : 4;
            stroke-dasharray  : 141.37;
            /* stroke-dashoffset : 141.37; */
        }
    }
`
import React from 'react'
import styled from 'styled-components'
import Icon from '../icons/Icon'
import { addClass, timeFormat } from '../Utils'
import { useClickOutside } from '../hooks/useClickOutside'
import { PlayerContext } from '../PlayerContext'
import useDraggable from '../hooks/useDraggable'

const Player = () => {
    const { track, timeRange, volume, changeSong, onPlay, onPause, onStop, tenSecForward, tenSecBackward, card, setCard, player, canvasRef } = React.useContext(PlayerContext)
    const { common: metadatas } = track.current.metadatas

    const volumeRef = React.useRef(null)
    const [openVolume, setOpenVolume] = React.useState(false)
    useClickOutside(volumeRef, () => setOpenVolume(false))

    const { style, onMouseDown } = useDraggable()

    return (
        <AudioCard
            className={`${addClass(card.minified && card.active, 'minified')}`}
            style={style}
        >
            <div className='player__top'
                onMouseDown={!card.minified ? ({ clientX, clientY }) => onMouseDown({ clientX, clientY }) : () => { }}
            >
                <Icon
                    name={card.minified ? "DoubleArrowUp" : "DoubleArrowDown"}
                    className="__minifier"
                    onClick={() => setCard(prev => ({ ...prev, minified: !card.minified }))}
                />
                <div className='player__infos'>
                    <img src={metadatas.cover} alt={metadatas.album} className='music__album' />
                    <div className='player__infos-inner'>
                        <div className='player__title'>
                            {metadatas.title}
                        </div>
                        <div className='player__artiste'>
                            {metadatas.artist} - {metadatas.album}
                        </div>
                    </div>
                </div>
                <div className='player__range'>
                    <input
                        type="range"
                        min="0"
                        max={timeRange.duration}
                        step="1"
                        value={timeRange.currentTime}
                        onChange={e => player.currentTime = Number(e.target.value)}
                        style={{ backgroundSize: `${(timeRange.currentTime / timeRange.duration * 100)}% 100%` }}
                    />
                </div>
                <div className='player__timestamps'>
                    <div className='timestamp start'>
                        {timeFormat(timeRange.currentTime)}
                    </div>
                    <div className='timestamp end'>
                        {timeFormat(timeRange.remainingTime)}
                    </div>
                </div>
            </div>
            <div className='player__bottom'>
                <div className='player__bottom-left'>
                    <div className='player__action-stop'>
                        <Icon name="Stop" onClick={() => onStop()} />
                    </div>
                    <Icon
                        name="TenBackward"
                        className="player__icon-back"
                        onClick={() => tenSecBackward()}
                    />
                    <Icon name="Backward"
                        className="player__icon-back"
                        onClick={() => changeSong('backward')}
                    />
                </div>
                <div className='player__icon'>
                    {!track.isPlaying ? (
                        <Icon
                            name="Play"
                            className="player__icon-play"
                            onClick={() => onPlay()}
                        />
                    ) : (
                        <Icon
                            name="Pause"
                            className="player__icon-pause"
                            onClick={() => onPause()}
                        />
                    )}
                </div>
                <div className='player__bottom-right'>
                    <Icon
                        name="Forward"
                        className="player__icon-next"
                        onClick={() => changeSong('forward')}
                    />
                    <Icon
                        name="TenForward"
                        className="player__icon-next"
                        onClick={() => tenSecForward()}
                    />
                    <div className='player__action-volume' ref={volumeRef}>
                        <Icon name={!volume.muted ? 'VolumeFull' : 'Mute'} onClick={() => setOpenVolume(!openVolume)} />
                        {openVolume &&
                            <div className='volume__range'>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume.rate}
                                    onChange={e => player.volume = e.target.value}
                                    style={{ backgroundSize: `${(volume.rate * 100) / 1}% 100%` }}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
            <canvas className="__visualizer" ref={canvasRef} />
        </AudioCard>
    )
}

export default React.memo(Player)

const AudioCard = styled.div`
    position         : fixed;
    top              : 50%;
    left             : 50%;
    width            : 100%;
    max-width        : 380px;
    background-color : var(--content-light);
    border-radius    : var(--rounded-md);
    box-shadow       : var(--shadow-two);
    cursor           : pointer;
    transition       : all .2s var(---easing);

    .__visualizer {
        position : absolute;
        bottom   : 40px;
        left     : 0;
        right    : 0;
        width    : 100%;
        height   : 60px;
        z-index  : -2;
        opacity  : 0.25;
    }

    .__minifier {
        position  : absolute;
        top       : 10px;
        right     : 10px;
        height    : 18px;
        width     : 18px;
        cursor    : pointer;
        &:hover {
            color : var(--primary);
        }
    }

    .player__top {
        position : relative;
        padding  : 20px 20px 10px 20px;
    }

    .player__infos {
        display        : flex;
        align-items    : center;
        pointer-events : none;
        user-select    : none;

        .music__album {
            height           : 44px;
            width            : 44px;
            object-fit       : cover;
            border-radius    : var(--rounded-md);
            background-color : var(--content);
        }

        .player__infos-inner {
            padding : 0 0 0 10px;

            .player__title {
                font-weight        : 500;
                font-size          : 15px;
                width              : 100%;
                text-overflow      : ellipsis;
                overflow           : hidden;
                display            : -webkit-box;
                -webkit-line-clamp : 1;
                -webkit-box-orient : vertical;
            }
            .player__artiste {
                color      : var(--text-secondary);
                font-size  : 13px;
                margin-top : 3px;
            }
        }
    }

    .player__range {
        padding : 8px 0 5px;
    }
    .player__timestamps {
        display         : flex;
        justify-content : space-between;
        font-size       : 12px;
    }

    .player__bottom {
        position         : relative;
        height           : 40px;
        display          : flex;
        justify-content  : space-between;
        background-color : var(--content);
        border-radius    : 0 0 var(--rounded-md) var(--rounded-md);

        .player__bottom-inner {
            position : relative;
            width    : 130px;
            height   : 100%;
            margin   : 0 auto;

            svg {
                cursor : pointer;
            }
        }

        .player__icon {
            position         : absolute;
            left             : 50%;
            top              : 50%;
            transform        : translate(-50%, -50%);
            width            : 54px;
            height           : 54px;
            display          : flex;
            align-items      : center;
            justify-content  : center;
            background-color : var(--content-light);
            border-radius    : var(--rounded-full);
            border           : 1px solid var(--light-border);
        }
        
        .player__icon-play {
            height      : 22px;
            width       : 24px;
            margin-left : 3px;
        }
        .player__icon-pause {
            height : 31px;
            width  : 28px;
        }

        .player__bottom-left,
        .player__bottom-right {
            display         : flex;
            align-items     : center;
            justify-content : space-between;
            width           : calc(50% - 44px)
        }

        .player__icon-back,
        .player__icon-next {
            width : 22px;
        }
        .player__bottom-left {
            padding-left : 10px;
        }
        .player__bottom-right {
            padding-right : 10px;
        }
    }
    
    .player__action-volume {
        display     : flex;
        align-items : center;
        padding     : 3px;
        svg {
            height : 24px;
            width  : 24px;
            cursor : pointer;
        }
        &:hover {
            background-color : var(--content-light);
            border-radius    : var(--rounded-full);
        }
    }
    
    .volume__range {
        position         : absolute;
        right            : -38px;
        bottom           : 80px;
        width            : 130px;
        display          : flex;
        justify-content  : center;
        transform        : rotate(-90deg);
        background-color : rgba(255, 255, 255, 0.2);
        backdrop-filter  : blur(5px);
        padding          : 15px;
        border-radius    : var(--rounded-full);
        user-select: none;
    }

    .player__action-stop {
        display         : flex;
        align-items     : center;
        justify-content : center;
        padding         : 3px;
        svg {
            height      : 24px;
            width       : 24px;
            cursor      : pointer;
        }
        &:hover {
            background-color : var(--content-light);
            border-radius    : var(--rounded-full);
        }
    }

    &.minified {
        bottom     : 0;
        top        : unset;
        transform  : translateX(-50%) !important;
        transition : .2s var(--easing);
        .player__timestamps {
            display : none;
        }
        .music__album {
            width  : 20px;
            height : 20px;
        }
        .player__range {
            position : absolute;
            bottom   : -4px;
            left     : 0;
            right    : 0;
            padding  : 0;
        }
        .player__top {
            padding : 6px 10px 10px;
            z-index : 2;
        }
        .player__infos {
            .player__infos-inner {
                display            : flex;
                align-items        : center;
                width              : 90%;
                height             : 16px;
                text-overflow      : ellipsis;
                overflow           : hidden;
                display            : -webkit-box;
                -webkit-line-clamp : 1;
                -webkit-box-orient : vertical;
                .player__title,
                .player__artiste {
                    width          : auto;
                    display        : inline-block;
                    margin-top     : 0;
                    line-height    : 16px;
                    font-size      : 14px;
                    vertical-align : middle;
                }
                .player__title {
                    margin-right : 5px
                }
                .player__artiste {
                    font-style : italic;
                }
            }
        }
        .__minifier {
            top : 5px;
        }
        .__visualizer {
            height : 36px;
        }
        .player__bottom {
            height        : 35px;
            border-radius : 0;
            .player__icon {
                height           : 32px;
                width            : 32px;
                transform        : translate(-50%, -46%);
            }
            .player__icon-play {
                height      : 18px;
                width       : 20px;
            }
            .player__icon-pause {
                margin-left : 1px;
            }
        }
    }

    @media(max-width: 992px) {
        right : 10px;
    }

    @media(max-width: 576px) {
        max-width     : unset;
        border-radius : 0;
        right         : 0;
        left          : 0;
        bottom        : 0;
        top           : unset;
        .player__bottom {
            border-radius : 0 !important;
        }
        &.minified {
            right     : 0;
            left      : 0;
            bottom    : 0;
            top       : unset;
            transform : none !important;
        }
    }

    input[type="range"] {
        -webkit-appearance : none;
        height             : 4px;
        background         : var(--light-border);
        border-radius      : var(--rounded-full);
        background-image   : linear-gradient(var(--primary), var(--primary));
        background-repeat  : no-repeat;
        width              : 100%;

        &:focus {
            outline : none;
        }

        &::-webkit-slider-runnable-track {
            -webkit-appearance : none;
            box-shadow         : none;
            border             : none;
            background         : transparent;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance : none;
            height             : 13px;
            width              : 13px;
            background         : var(--content-light);
            border             : 3px solid var(--primary);
            border-radius      : var(--rounded-full);
            cursor             : pointer;
            transition         : background 0.3s ease-in-out;
        }

        &::-moz-range-track,
        &::-moz-range-progress {
            -webkit-appearance : none;
            box-shadow         : none;
            border             : none;
            background         : transparent;
        }

        &::-moz-range-progress {
            background : var(--primary);
        }

        &::-moz-range-thumb {
            -webkit-appearance : none;
            height             : 10px;
            width              : 10px;
            background         : var(--content-light);
            border             : 3px solid var(--primary);
            border-radius      : var(--rounded-full);
            cursor             : pointer;
            transition         : background 0.3s ease-in-out;
        }

        &::-ms-track {
            width      : 100%;
            height     : 4px;
            border     : 0;
            color      : transparent;
            background : transparent;
        }

        &::-ms-fill-lower {
            background : var(--primary);
        }

        &::-ms-fill-upper {
            background : rgba(var(--primary-rgb), 0.2)
        }
    }
`
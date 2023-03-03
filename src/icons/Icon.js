import Play from './Play';
import Pause from './Pause';
import Backward from './Backward';
import Forward from './Forward';
import Music from './Music';
import VolumeFull from './VolumeFull';
import Mute from './Mute';
import Stop from './Stop';
import DoubleArrowUp from './DoubleArrowUp';
import DoubleArrowDown from './DoubleArrowDown';
import TenForward from './TenForward';
import TenBackward from './TenBackward';

const Icon = (props) => {
    switch (props.name) {
        case 'Play':
            return <Play {...props} />;
        case 'Pause':
            return <Pause {...props} />;
        case 'Music':
            return <Music {...props} />;
        case 'Backward':
            return <Backward {...props} />;
        case 'Forward':
            return <Forward {...props} />;
        case 'TenBackward':
            return <TenBackward {...props} />;
        case 'TenForward':
            return <TenForward {...props} />;
        case 'VolumeFull':
            return <VolumeFull {...props} />;
        case 'Mute':
            return <Mute {...props} />;
        case 'Stop':
            return <Stop {...props} />;
        case 'DoubleArrowUp':
            return <DoubleArrowUp {...props} />;
        case 'DoubleArrowDown':
            return <DoubleArrowDown {...props} />;
        default:
            return <Music {...props} />;
    }
};

export default Icon;

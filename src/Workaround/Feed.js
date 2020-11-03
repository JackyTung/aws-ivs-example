import React, { useState, useEffect, useRef} from 'react'
import StreamPlayer from './StreamPlayer'

const Feed = () => {
    const { IVSPlayer } = window
    const { isPlayerSupported } = IVSPlayer;
    const [mount, setMount] = useState(false)
    const player = useRef(null);

    useEffect(() => {
        const { ENDED, PLAYING, READY } = IVSPlayer.PlayerState;

        const onStateChange = () => {
            const newState = player.current.getState();
      
            console.log(`Player State - ${newState}`);
        };

        if (!isPlayerSupported) {
            console.warn(
                'The current browser does not support the Amazon IVS player.',
            );
            return ;
        }
        
        player.current = IVSPlayer.create();
        player.current.addEventListener(READY, onStateChange);
        player.current.addEventListener(PLAYING, onStateChange);
        player.current.addEventListener(ENDED, onStateChange);
        // envoke rerender
        setMount((prevMount) => !prevMount)
        return () => {
            player.current.removeEventListener(READY, onStateChange);
            player.current.removeEventListener(PLAYING, onStateChange);
            player.current.removeEventListener(ENDED, onStateChange);
          };
 
    }, [IVSPlayer, isPlayerSupported])
 
   
    if (!isPlayerSupported) {
        return null;
    }

    return (
        <StreamPlayer player={player.current}/>
    )

}

export default Feed
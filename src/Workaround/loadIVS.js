const loadIVS = (callback) => {
    const existingScript = document.getElementById('aws-ivs-player');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://player.live-video.net/1.1.2/amazon-ivs-player.min.js';
        script.id = 'aws-ivs-player';
        document.body.appendChild(script);
        script.onload = () => { 
          if (callback) callback();
        };
    }

    if (existingScript && callback) callback();
}

export default loadIVS;
layui.use('layer', function() {
    var $ = layui.jquery
      , layer = layui.layer;
    $(document).on("click", "#member", function() {
        layer.open({
            type: 0,
            skin: 'layui-layer-lan',
            title: '影视宣传请联系',
            content: '<p>影视部：杜XX</p><p>手机/微信：XXX-XXXX-XXXX</p>',
            btn: ['好的'],
            closeBtn: 0,
            btnAlign: 'c',
            shade: [0.6, '#5FB878'],
            id: 'video-ui',
            time: 20000,
            anim: 0
        })
    });
    $(document).on("click", "#activity", function() {
        layer.open({
            type: 0,
            skin: 'layui-layer-lan',
            title: '广告策划请联系',
            content: '<p>广告部：李XX</p><p>手机/微信：XXX-XXXX-XXXX</p>',
            btn: ['好的'],
            closeBtn: 0,
            btnAlign: 'c',
            shade: [0.6, '#5FB878'],
            id: 'advert-ui',
            time: 20000,
            anim: 0
        })
    });
    $(document).on("click","#weixin",function() {
        layer.open({
            type: 0,
            skin: 'layui-layer-lan',
            title: '来微信关注我们',
            closeBtn: 0,
            area: '300px;',
            shade: [0.6, '#5FB878'],
            id: 'weixin-ui',
            resize: false,
            btn: ['好的'],
            btnAlign: 'c',
            time: 20000,
            anim: 0,
            moveType: 1,
            content: '<p style="text-align: center;">渡口工作室</p><p><img src="static/img/weixin.jpg"></p><p style="text-align: center;">微信号：dukougzs</p>'
        });
    });
});
var video = document.getElementById('bgvid');
video.playbackRate = 0.6;
function musicPlay() {
    var audio = document.getElementById("bgaud");
    audio.addEventListener("canplaythrough", function() {
        audio.play()
    }, false);
    audio.volume = 0.05;
    timer_volume_up = setInterval(function() {
        if (audio.volume < 0.20) {
            audio.volume += 0.01
        } else {
            audio.volume = 0.20;
            clearInterval(timer_volume_up)
        }
    }, 1000);
    timer_count = setTimeout(function() {
        timer_volume_down = setInterval(function() {
            if (audio.volume > 0.05) {
                audio.volume -= 0.01
            } else {
                audio.volume = 0.05;
                clearInterval(timer_volume_down)
            }
        }, 1000)
    }, parseInt(audio.duration * 1000 - 15000))
}
musicPlay();
window.AudioContext = window.AudioContext || window.webkitAudioContext;
(function() {
    if (!window.AudioContext) {
        return
    }
    var Buttons = document.getElementsByClassName('btn');
    var audioCtx = new AudioContext();
    var arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
    var start = 0
      , direction = 1;
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].addEventListener('mouseenter', function() {
            var frequency = arrFrequency[start];
            if (!frequency) {
                direction = -1 * direction;
                start = start + 2 * direction;
                frequency = arrFrequency[start]
            }
            start = start + direction;
            var oscillator = audioCtx.createOscillator();
            var gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.type = 'sine';
            oscillator.frequency.value = frequency;
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
            oscillator.start(audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
            oscillator.stop(audioCtx.currentTime + 1)
        })
    }
}
)();
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7340ce0a86a47cc82bd30f87e3dc82d0";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s)
}
)();
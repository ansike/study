Vue.component('child-example', {
  props: ['data'],
  template: '<dev>{{data.text}}</div><br>'
})

var video = {
  data: {

  },

}

var app = new Vue({
  el: "#app",
  data: {
    message: "mes",
    title: "文本显示于" + new Date(),
    list: [{
        id: 0,
        text: '蔬菜'
      },
      {
        id: 1,
        text: '奶酪'
      },
      {
        id: 2,
        text: '随便其它什么人吃的东西'
      }
    ],
    height: 0,
    show: true,
    shows: true,
    voice: document.getElementsByClassName('voice')[0]
  },
  mounted() {
    
  },
  methods: {
    videoPlay(){
      this.video = document.getElementById("video");
      var constraints = { // 音频、视频约束
        // audio: true, // 指定请求音频Track
        video: true
      };
      this.init(constraints, this.video);
    },
    record(){
      let that = this;
      var vioce = document.getElementsByClassName('voice')[0]
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      navigator.getUserMedia({ 
        audio: true
      }, (stream)=>{
        new Record(stream);
      }, ()=>{});

      function Record(stream){
        var config = {};
        var audioContext = window.AudioContext || window.WebkitAudioContext;
        var context = new audioContext();
        var audioInput = context.createMediaStreamSource(stream);
        //创建缓存，用来缓存声音  
        config.bufferSize = 4096;

        //设置音量节点
        var volume = context.createGain();
        audioInput.connect(volume);

        // 创建声音的缓存节点，createScriptProcessor方法的  
        // 第二个和第三个参数指的是输入和输出都是声道数。
        var recorder = context.createScriptProcessor(config.bufferSize); 

        //开始录音  
        this.start = function () {
          audioInput.connect(recorder);  
          recorder.connect(context.destination);
        };  
        
        recorder.onaudioprocess = function (e) {
          // console.log(e)
            // audioData.input(e.inputBuffer.getChannelData(0));
           //获取输入和输出的数据缓冲区
           var input = e.inputBuffer.getChannelData(0);
           console.log(input)
           //绘制条形波动图
           let width = 100;
           for(i=0;i<width;i++){
              that.height=Math.abs(width*input[input.length*i/width|0]);
              vioce.style.width = that.height*10 + 'px';
            }
            console.log(that.height)
            // var timeHidden=document.getElementById('audiolength');
            // timeHidden.Value=e.playbackTime;
            // // console.log(timeHidden.Value);
            // if(timeHidden.Value>=60){
            //     recorder.disconnect();  
            //     setTimeout(saveAudio(),500);
            // }
        };
        this.start();
      }
    },
    closeRecord(){

    },
    audioPlay(){
      this.audio = document.getElementById("audio");
      var constraints = { // 音频、视频约束
        audio: true, // 指定请求音频Track
      };
      this.init(constraints, this.audio);
    },
    closeVideo(){
      debugger
      this.tracks[0].stop();
    },
    closeAudio(){
      debugger
      this.tracks[0].stop();
    },
    init(constraints, obj) {
      let that = this;
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
      function successCallback(stream) {
        that.tracks = stream.getTracks();
        obj.srcObject = stream;
        obj.play();
      }

      function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
      }

      navigator.getUserMedia(constraints, successCallback, errorCallback);
    },  
    animatecss(e){
      debugger
      // Velocity(e.target, { opacity: 1, fontSize: '1.4em' }, { duration: 1000 })
    }
  },
  components: {

  }
})
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
    video: {},

  },
  mounted() {
    this.video = document.getElementById("video");
    this.init();
  },
  methods: {
    init() {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      var constraints = { // 音频、视频约束
        audio: true, // 指定请求音频Track
        video: true
        // { // 指定请求视频Track
        //   mandatory: { // 对视频Track的强制约束条件
        //     width: {
        //       min: 320
        //     },
        //     height: {
        //       min: 180
        //     }
        //   },
        //   optional: [ // 对视频Track的可选约束条件
        //     {
        //       frameRate: 30
        //     }
        //   ]
        // }
      };

      var video = document.querySelector('video');

      function successCallback(stream) {
        if (window.URL) {
          video.src = window.URL.createObjectURL(stream);
        } else {
          video.src = stream;
        }
      }

      function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
      }

      navigator.getUserMedia(constraints, successCallback, errorCallback);
    }
  },
  components: {

  }
})
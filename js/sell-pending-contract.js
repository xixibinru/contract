window.addEventListener('load',function(){
  new Vue({
    el: '#contract-pictrue',
    data: {
      pictrues:[],
      reader: new FileReader()
    },
    methods: {
      getBase64: function($event){
        var self = this,
            file =  $event.target.files[0];
            console.log(file);
        if(!/image/g.test(file.type)){
            alert('请选择图片上传');
            return;
        }
        this.reader.readAsDataURL(file);
      },
      removePic: function(index){
        this.pictrues.splice(index,1);
      }
    },
    created: function() {
      var self = this;
      this.reader.onload = function () {
        var base64Str = this.result.split(';base64,')[1];
        self.pictrues.push(this.result);
      }
    }
  });
})
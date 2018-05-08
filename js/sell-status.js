window.addEventListener('load',function(){
  new Vue({
    el: '#status',
    data: {
      current_status: '进行中',
      some_data1: [
      {
        shop_name: '1',
        price: '￥2000.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      },
      {
        shop_name: '1',
        price: '￥85.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      }
      ],
      some_data2: [
      {
        shop_name: '玉清池-北京天安门店',
        price: '￥2000.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      },
      {
        shop_name: '玉清池-北京天安门店',
        price: '￥85.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      },
      {
        shop_name: '玉清池-北京天安门店',
        price: '￥196.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '已收款',
        time: '2017-12-02 15:21'
      }
      ],
      some_data3: [
      {
        shop_name: '3',
        price: '￥2000.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      },
      {
        shop_name: '3',
        price: '￥85.00',
        user_name: '智钟宝',
        status: '1—未安装',
        return_money: '未回款',
        time: '2017-12-02 15:21'
      }
      ]
    },
    methods: {
      getData: function($event){
        console.log($event);
        this.current_status = $event;
      }
    },
    computed: {
      current_data: function(){
        switch(this.current_status){
          case '待处理':
          return this.some_data1;
          case '进行中':
          return this.some_data2;
          case '已完成':
          return this.some_data3;
        }
      }
    }
  });
})
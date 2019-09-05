// MyPicker.js
let list = [];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    chooseList: {
      type: Array
    },
    multiple: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPicker: false,
    firstShow: false,
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击picker元素事件	
    chooseItem(e) {
      if (this.properties.multiple) {
        // 多选事件
        let val = e.target.dataset.value;
        let arr = this.data.chooseList;
        let flag = '';
        let index = null;
        for (let i = 0, len = arr.length; i < len; i++) {
          if (arr[i].value == val) {
            index = i;
            flag = `chooseList[${i}].flag`
          }
        }
        if (!this.data.chooseList[index].flag) {
          this.setData({
            [flag]: true
          })
        } else {
          this.setData({
            [flag]: false
          })
        }
      } else {
        // 单选事件
        let val = e.target.dataset.value;
        let arr = this.data.chooseList;
        let flag = '';
        let index = null;
        for (let i = 0, len = arr.length; i < len; i++) {
          index = i;
          flag = `chooseList[${i}].flag`;
          if (arr[i].value == val) {
            this.setData({
              [flag]: true
            })
          } else {
            this.setData({
              [flag]: false
            })
          }
        }
      }
    },
    // 展示picker
    showPicker() {
      if (!this.data.firstShow) {
        this.setData({
          firstShow: true
        })
      }
      this.setData({
        showPicker: true,
      })
      // 加载时重新渲染已选择元素
      let arr = this.data.chooseList;
      let array = this.data.list;
      let flag = '';
      let index = null;
      for (let i = 0, len = arr.length; i < len; i++) {
        index = i;
        flag = `chooseList[${i}].flag`;
        if (!array.includes(arr[i].value)) {
          this.setData({
            [flag]: false
          })
        } else {
          this.setData({
            [flag]: true
          })
        }
      }
    },
    // 隐藏picker
    hidePicker() {
      this.setData({
        showPicker: false
      })
    },
    // 取消按钮事件
    cancal() {
      this.hidePicker();
    },
    // 确定按钮事件
    sure() {
      list = [];
      for (let item of this.data.chooseList) {
        if (item.flag) {
          list.push(item.value);
        }
      }
      this.setData({
        list
      })
      this.hidePicker();
      this.triggerEvent('chooseEvent', {
        chooseArray: this.data.list
      });
    }
  }
})

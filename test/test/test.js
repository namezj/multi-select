Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: ['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级', '初中一年级', '初中二年级', '初中三年级', '高中一年级', '高中二年级', '高中三年级'],
    gradeIndex:0,
    chooseList: [
      { value: '语文', name: '语文' },
      { value: '数学', name: '数学' },
      { value: '英语', name: '英语' },
      { value: '物理', name: '物理' },
      { value: '化学', name: '化学' },
      { value: '生物', name: '生物' },
      { value: '政治', name: '政治' },
      { value: '历史', name: '历史' },
      { value: '地理', name: '地理' }
    ],
    multiple: true
  },
  formSubmit: function (e) {
    let obj = e.detail.value;
    obj.subjects = this.data.chooseArray;
    obj.grade = this.data.grade[this.data.gradeIndex];
    console.log('form发生了submit事件，携带数据为：', obj)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindGradeChange: function (e) {
    this.setData({
      gradeIndex: e.detail.value
    })
  },
  // 点击确定事件
  choose(e) {
    this.setData({
      chooseArray: e.detail.chooseArray
    })
  }
})
function _startLession(){
    console.log(this.belongTo + '早上' + this.startTime + '上课');
    return this;
}
function JavascriptCourse(){
    this.belongTo = '珠峰培训';
    this.headmaster = '老耿';
    this.startLession = _startLession.bind(this);
}
JavascriptCourse.prototype.constructor = JavascriptCourse;
JavascriptCourse.prototype.test = function(){
    console.log('test');
}
function MobileCourse(){}
MobileCourse.prototype = Object.create(JavascriptCourse.prototype);

//MobileCourse.prototype = new JavascriptCourse();
var mobile = new MobileCourse();
console.log(mobile.test);
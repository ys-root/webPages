document.addEventListener('DOMContentLoaded', function() {
const suggestTrigger = document.querySelector('.suggest-trigger');
const suggestBox = document.getElementById('suggestBox');
const suggestInput = document.getElementById('suggestInput');
const submitButton = document.querySelector('.suggest-submit');

// 显示建议框并自动调整位置
suggestTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    suggestBox.style.display = 'block';
    suggestInput.focus();
    
    // 获取按钮位置
    const triggerRect = suggestTrigger.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerBottom = triggerRect.bottom;
    
    // 检测底部空间是否足够（考虑建议框变宽后的布局）
    if (triggerBottom + suggestBox.offsetHeight > windowHeight) {
        suggestBox.style.top = 'auto';
        suggestBox.style.bottom = '100%';
        suggestBox.style.marginBottom = '5px';
    } else {
        suggestBox.style.top = '100%';
        suggestBox.style.bottom = 'auto';
        suggestBox.style.marginTop = '5px';
        suggestBox.style.marginBottom = '0';
    }
});

// 提交建议
submitButton.addEventListener('click', function() {
    const inputValue = suggestInput.value.trim();
    if (inputValue) {
        alert('提交成功！感谢同学的反馈！');
        suggestBox.style.display = 'none';
        suggestInput.value = '';
    } else {
        alert('请输入建议内容！');
    }
});
});

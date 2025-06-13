function toggleSuggestBox() {
    const suggestBox = document.getElementById('suggestBox');
    suggestBox.style.display = suggestBox.style.display === 'none' ? 'block' : 'none';
}

function submitSuggest() {
    const suggestInput = document.getElementById('suggestInput');
    const suggestion = suggestInput.value.trim();
    
    if (suggestion === '') {
        alert('请输入您的建议内容');
        return;
    }
    alert('您的建议已提交成功，感谢同学的反馈~');
    
    suggestInput.value = '';
    document.getElementById('suggestBox').style.display = 'none';
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为"立即提交"链接添加点击事件
    const suggestTrigger = document.querySelector('.suggest-trigger');
    suggestTrigger.addEventListener('click', function(e) {
        e.preventDefault(); 
        toggleSuggestBox();
    });
    
    document.getElementById('suggestBox').style.display = 'none';
});

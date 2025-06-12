document.addEventListener('DOMContentLoaded', () => {
    const suggestBox = document.getElementById('suggestBox');
    const triggerLink = document.querySelector('.d1 .suggest-trigger');
    triggerLink?.addEventListener('click', (e) => {
        e.preventDefault();
        suggestBox.style.display = 'block';
    });
});

function submitSuggest() {
    const input = document.getElementById('suggestInput');
    const inputValue = input.value.trim();

    if (!inputValue) {
        alert('请输入建议内容！');
        return;
    }

    alert('建议提交成功！学长学姐已记录你的反馈~');
    input.value = ''; // 清空输入
    document.getElementById('suggestBox').style.display = 'none'; // 隐藏输入框
}
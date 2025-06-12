//网站内元素不可拖动
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});


//点击事件，鼠标点击后随机出现二十四字核心价值观
window.onload = function () {
    const words = ['自由', '平等', '公正', '法制', '爱国', '敬业', '诚信', '友善', ''];
    const colors = ['#CB4042','#FFB11B','#00AA90' ];
    const body = document.body;
  
    function createWord(word, color, x, y) {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.color = color;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.position = 'absolute';
        span.style.fontSize = '40px';
        span.style.fontWeight = 'bold';
        // span.style.color = '#ff6651';
        span.style.transition = 'opacity 1s, transform 1s';
        span.style.opacity = 1;
        span.style.transform = 'translate(-50%, -50%) translateY(-100px)';
        body.appendChild(span);

        setTimeout(() => {
        span.style.opacity = 0;
        span.style.transform = 'translate(-50%, -50%) translateY(-200px)';
        }, 100);

        setTimeout(() => {
        body.removeChild(span);
        }, 2000);
    }
    body.addEventListener('click', (e) => {
        const word = words[Math.floor(Math.random() * words.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        createWord(word, color, e.clientX, e.clientY);
    });
};
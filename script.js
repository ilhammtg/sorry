document.getElementById('forgiveButton').addEventListener('click', function () {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.style.opacity = 0;

    setTimeout(() => {
        responseMessage.style.opacity = 1;
    }, 100);

    this.style.display = 'none';
});

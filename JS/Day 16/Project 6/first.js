

const olympicTime = new Date(2028,6,14).getTime();



    setInterval(() => {
    const currentTime = Date.now();

    let timer = olympicTime - currentTime;

    const day = Math.floor(timer/(1000*60*60*24));
    timer %= (1000*60*60*24);

    const hour = Math.floor(timer/(1000*60*60));
    timer %= (1000*60*60*24);

    const minute = Math.floor(timer/(1000*60));
    timer %= (1000*60*60*24);

    const second = Math.floor(timer/1000);
   

    result.textContent = ` ${day} : Days  ${hour} : Hours  ${minute} : Minutes  ${second} : Seconds`;
    },1000)

const advNumPar = document.querySelector('.c-adv-num');
const advicePar = document.querySelector('.c-adv-text');
const diceBtn = document.querySelector('button');

async function getAdvice() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      return response.data;
    } catch (e) {
      console.log(e);
    }
}  

async function main() {
    // let data =  await getAdvice();
    // advNumPar.innerHTML = `ADVICE#${data.slip.id.toString()}`;
    // advNumPar.innerHTML = advNumPar.innerHTML.split('').join(' ');
    // advicePar.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;

    diceBtn.addEventListener('click',async () => {
        data = await getAdvice();
        advNumPar.innerHTML = `ADVICE#${data.slip.id.toString()}`;
        advNumPar.innerHTML = advNumPar.innerHTML.split('').join(' ');
        advicePar.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
    })
}

main();





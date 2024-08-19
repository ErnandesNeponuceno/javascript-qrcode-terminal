import prompt from 'prompt'
import mainPrompt from  './prompts/prompt-main.js'
import creatQrcode from './services/qr-code/create.js';



async function main(){
    prompt.get(mainPrompt, async (error, choose) =>{
        if(choose.select == 1) await creatQrcode();
        if(choose.select == 2) console.log('escolheu o password');
    });

    prompt.start();
}


main();
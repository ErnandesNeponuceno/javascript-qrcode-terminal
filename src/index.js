import prompt from 'prompt'
import mainPrompt from  './prompts/prompt-main.js'
import creatQrcode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(){
    prompt.get(mainPrompt, async (error, choose) =>{
        if(error)console.log(error);
        if(choose.select == 1) await creatQrcode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();
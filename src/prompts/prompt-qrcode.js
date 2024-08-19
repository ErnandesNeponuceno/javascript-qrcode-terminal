import chalk from "chalk";

const prompTQrcode = [
   { 
    name: 'link',
    description: chalk.red("Digite o link para gerar o QR code: ")
   },
   {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo (1 - NORMAL) ou (2 - TERMINAL)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha somente entre 1 e 2"),
    require: true,
   }
];

export default prompTQrcode;
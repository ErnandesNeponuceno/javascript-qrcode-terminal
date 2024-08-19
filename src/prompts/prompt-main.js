import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold('Escolha a ferramenta (1 - QR CODE OU PASSWORD') ,
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha somente entre 1 e 2'),
        require: true,
    }
];

export default mainPrompt;
import { CliApp } from "./presentation/cli/cli-app";
import { AppConfig } from "./infrastructure/config/app-config";

const { OPENAI_API_KEY } = AppConfig;

if (!OPENAI_API_KEY) {
    console.error("The app could not load the OPENAI_API_KEY.");
    process.exit(1);
}

const cliApp = new CliApp(OPENAI_API_KEY);
cliApp.start();

import "dotenv/config";
import { InferenceClient } from "@huggingface/inference";

if (!process.env.HF_TOKEN) {
  throw new Error("HF_TOKEN is missing in .env file");
}

const hf = new InferenceClient(process.env.HF_TOKEN);

export default hf;

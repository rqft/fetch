import { MakeSweet } from "./lib";

(async () => {
    const api = new MakeSweet.API();
    const output = await api.runUrls("valentine", [
        "https://cdn.discordapp.com/avatars/727749624932204614/49c3c139822f0f6da311c516d846ebc9.png",
    ]);

    console.log(`data://image/gif;base64,${output.payload.toString("base64")}`);
})();

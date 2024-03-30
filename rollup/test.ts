import { Wallet } from "ethers";
import { schemas } from "./src/actions";
import { stackrConfig } from "./stackr.config";

const { domain } = stackrConfig;

type ActionName = keyof typeof schemas;

type PointActionInput = {
    address: string;
    channelId: string;
    points: number;
    fid: number;
    followers: number;
    following: number;
    totalCasts: number;
    totalLikes: number;
    totalRecasts: number;
    totalLiked: number;
    totalRecasted: number;
    totalChannelCasts: number;
    totalChannelLikes: number;
    totalChannelRecasts: number;
    totalChannelLiked: number;
    totalChannelRecasted: number;
};

const wallet = new Wallet(
    "0x0123456789012345678901234567890123456789012345678901234567890123"
);

const dummyData = {
    address: "0x0123456789012345678901234567890123456788",
    channelId: "eigenlayer",
    points: 0,
    fid: 12402,
    followers: 130,
    following: 91,
    totalCasts: 39,
    totalLikes: 493,
    totalRecasts: 12,
    totalLiked: 945,
    totalRecasted: 23,
    totalChannelCasts: 18,
    totalChannelLikes: 69,
    totalChannelRecasts: 5,
    totalChannelLiked: 234,
    totalChannelRecasted: 4,
}

const getBody = async (actionName: ActionName, wallet: Wallet, data: PointActionInput) => {
    const walletAddress = wallet.address;
    const { address, channelId, points } = data;
    const { fid, followers, following, totalCasts, totalLikes, totalRecasts, totalLiked, totalRecasted } = data;
    const { totalChannelCasts, totalChannelLikes, totalChannelRecasts, totalChannelLiked, totalChannelRecasted } = data;
    const payload =
      actionName === "create"
        ? {
            address: address,
            channelId: channelId,
          }
        : {
            address: address,
            channelId: channelId,
            points: points,
            fid: fid,
            followers: followers,
            following: following,
            totalCasts: totalCasts,
            totalLikes: totalLikes,
            totalRecasts: totalRecasts,
            totalLiked: totalLiked,
            totalRecasted: totalRecasted,
            totalChannelCasts: totalChannelCasts,
            totalChannelLikes: totalChannelLikes,
            totalChannelRecasts: totalChannelRecasts,
            totalChannelLiked: totalChannelLiked,
            totalChannelRecasted: totalChannelRecasted,
          };
  
    const signature = await wallet.signTypedData(
      domain,
      schemas[actionName].EIP712TypedData.types,
      payload
    );
  
    const body = JSON.stringify({
      msgSender: walletAddress,
      signature,
      payload,
    });
  
    return body;
};

const run = async (actionName: ActionName, wallet: Wallet, data: PointActionInput) => {
    const start = Date.now();
    const body = await getBody(actionName, wallet, data);
  
    const res = await fetch(`http://localhost:3000/${actionName}`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const end = Date.now();
    const json = await res.json();
  
    const elapsedSeconds = (end - start) / 1000;
    const requestsPerSecond = 1 / elapsedSeconds;
  
    console.info(`Requests per second: ${requestsPerSecond.toFixed(2)}`);
    console.log(`Response: ${JSON.stringify(json, null, 2)}`);
};

const main = async (actionName: string, data: PointActionInput) => {
    if (!Object.keys(schemas).includes(actionName)) {
      throw new Error(
        `Action ${actionName} not found. Available actions: ${Object.keys(
          schemas
        ).join(", ")}`
      );
    }

    await run(actionName as ActionName, wallet, data);
  };

main("calculatePoints", dummyData);
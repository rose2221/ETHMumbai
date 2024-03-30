import { Reducers, STF } from "@stackr/sdk/machine";
import { ERC20, BetterMerkleTree as StateWrapper } from "./state";
import Base from "merkletreejs/dist/Base";

// --------- Utilities ---------
const findIndexOfAccount = (state: StateWrapper, address: string) => {
  return state.leaves.findIndex((leaf) => leaf.address === address);
};

const _calculatePoints = (data: BaseActionInput) => {
  const {followers, following, totalCasts, totalLikes, totalRecasts, totalLiked, totalRecasted} = data; 
  const user_reputation = ((followers + following) * (followers/following)) + (5*totalCasts + 10*totalLikes + 25*totalRecasts + totalLiked + 5*totalRecasted);
  const {totalChannelCasts, totalChannelLikes, totalChannelRecasts, totalChannelLiked, totalChannelRecasted} = data;
  const channel_reputation =
    5*totalChannelCasts + 10*totalChannelLikes + 25*totalChannelRecasts + totalChannelLiked + 5*totalChannelRecasted;
  const points = 
    user_reputation * channel_reputation;
  return points;
}

type CreateInput = {
  address: string;
  channelId: string;
};

type BaseActionInput = {
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

// --------- State Transition Handlers ---------
const create: STF<ERC20, CreateInput> = {
  handler: ({ inputs, state }) => {
    const { address, channelId } = inputs;
    if (state.leaves.find((leaf) => leaf.address === address)) {
      throw new Error("Account already exists");
    }
    const points = 0;
    state.leaves.push({
      address,
      points,
      channelId,
    });
    return state;
  },
};

const calculatePoints: STF<ERC20, BaseActionInput> = {
  handler: ({ inputs, state }) => {
    const { address, channelId } = inputs;
    const points = _calculatePoints(inputs);

    if (state.leaves.find((leaf) => leaf.address !== address)) {
      state.leaves.push({
        address,
        points,
        channelId,
      });
    }
    else {
      const addressIndex = findIndexOfAccount(state, address);
      state.leaves[addressIndex].points = points;
      state.leaves[addressIndex].channelId = channelId;
    }
    return state;
  },
};

export const reducers: Reducers<ERC20> = {
  create,
  calculatePoints,
};

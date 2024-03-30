import { ActionSchema, SolidityType } from "@stackr/sdk";

// createAccountSchema is a schema for creating an account
export const createAccountSchema = new ActionSchema("createAccount", {
  address: SolidityType.ADDRESS,
  channelId: SolidityType.STRING,
});


export const calculatePointsSchema = new ActionSchema("calculatePoints", {
  address: SolidityType.ADDRESS,
  channelId: SolidityType.STRING,
  points: SolidityType.UINT,
  fid: SolidityType.UINT,
  followers: SolidityType.UINT,
  following: SolidityType.UINT,
  totalCasts: SolidityType.UINT,
  totalLikes: SolidityType.UINT,
  totalRecasts: SolidityType.UINT,
  totalLiked: SolidityType.UINT,
  totalRecasted: SolidityType.UINT,
  totalChannelCasts: SolidityType.UINT,
  totalChannelLikes: SolidityType.UINT,
  totalChannelRecasts: SolidityType.UINT,
  totalChannelLiked: SolidityType.UINT,
  totalChannelRecasted: SolidityType.UINT,
})
// transferSchema is a collection of all the transfer actions
// that can be performed on the rollup
export const schemas = {
  create: createAccountSchema,
  calculatePoints: calculatePointsSchema
};

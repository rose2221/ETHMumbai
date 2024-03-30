import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  channelAdded,
  newUserAdded,
  pointsUpdated
} from "../generated/FarcasterPoints/FarcasterPoints"

export function createchannelAddedEvent(
  user: Address,
  channelId: string
): channelAdded {
  let channelAddedEvent = changetype<channelAdded>(newMockEvent())

  channelAddedEvent.parameters = new Array()

  channelAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  channelAddedEvent.parameters.push(
    new ethereum.EventParam("channelId", ethereum.Value.fromString(channelId))
  )

  return channelAddedEvent
}

export function createnewUserAddedEvent(user: Address): newUserAdded {
  let newUserAddedEvent = changetype<newUserAdded>(newMockEvent())

  newUserAddedEvent.parameters = new Array()

  newUserAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return newUserAddedEvent
}

export function createpointsUpdatedEvent(
  user: Address,
  channelId: Array<string>,
  points: Array<BigInt>
): pointsUpdated {
  let pointsUpdatedEvent = changetype<pointsUpdated>(newMockEvent())

  pointsUpdatedEvent.parameters = new Array()

  pointsUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  pointsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "channelId",
      ethereum.Value.fromStringArray(channelId)
    )
  )
  pointsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "points",
      ethereum.Value.fromUnsignedBigIntArray(points)
    )
  )

  return pointsUpdatedEvent
}

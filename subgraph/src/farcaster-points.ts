import {
  channelAdded as channelAddedEvent,
  newUserAdded as newUserAddedEvent,
  pointsUpdated as pointsUpdatedEvent
} from "../generated/FarcasterPoints/FarcasterPoints"
import { channelAdded, newUserAdded, pointsUpdated } from "../generated/schema"

export function handlechannelAdded(event: channelAddedEvent): void {
  let entity = new channelAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.channelId = event.params.channelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewUserAdded(event: newUserAddedEvent): void {
  let entity = new newUserAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlepointsUpdated(event: pointsUpdatedEvent): void {
  let entity = new pointsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.channelId = event.params.channelId
  entity.points = event.params.points

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

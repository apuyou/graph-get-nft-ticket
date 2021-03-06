import { primarySaleMint } from "../generated/Contract/Contract";
import { newEventRegistered } from "../generated/EventContract/EventContract";
import { Ticket, Event } from "../generated/schema";

export function handleprimarySaleMint(event: primarySaleMint): void {
  let ticket = new Ticket(event.transaction.hash.toHex());
  // Skip tickets with no events
  if (!event.params.eventAddress) {
    return;
  }
  ticket.event = event.params.eventAddress.toHex();
  ticket.owner = event.params.destinationAddress;
  ticket.save();
}

export function handlenewEventRegistered(event: newEventRegistered): void {
  let entity = new Event(event.params.eventAddress.toHex());
  entity.name = event.params.eventName;
  entity.save();
}

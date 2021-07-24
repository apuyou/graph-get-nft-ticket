import { primarySaleMint } from "../generated/Contract/Contract";
import { Ticket } from "../generated/schema";

export function handleprimarySaleMint(event: primarySaleMint): void {
  let ticket = new Ticket(event.transaction.hash.toHex());
  ticket.event = event.params.eventAddress.toHex();
  ticket.owner = event.params.destinationAddress;
  ticket.save();
}

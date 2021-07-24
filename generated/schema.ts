// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Ticket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ticket entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ticket entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ticket", id.toString(), this);
  }

  static load(id: string): Ticket | null {
    return store.get("Ticket", id) as Ticket | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get primaryPrice(): BigInt | null {
    let value = this.get("primaryPrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set primaryPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("primaryPrice");
    } else {
      this.set("primaryPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get event(): string {
    let value = this.get("event");
    return value.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }
}

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Event entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Event entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Event", id.toString(), this);
  }

  static load(id: string): Event | null {
    return store.get("Event", id) as Event | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountPublicKeyHash(): string | null {
    let value = this.get("accountPublicKeyHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set accountPublicKeyHash(value: string | null) {
    if (value === null) {
      this.unset("accountPublicKeyHash");
    } else {
      this.set("accountPublicKeyHash", Value.fromString(value as string));
    }
  }

  get ticketIssuerID(): string | null {
    let value = this.get("ticketIssuerID");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ticketIssuerID(value: string | null) {
    if (value === null) {
      this.unset("ticketIssuerID");
    } else {
      this.set("ticketIssuerID", Value.fromString(value as string));
    }
  }

  get ticketIssuerName(): string | null {
    let value = this.get("ticketIssuerName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ticketIssuerName(value: string | null) {
    if (value === null) {
      this.unset("ticketIssuerName");
    } else {
      this.set("ticketIssuerName", Value.fromString(value as string));
    }
  }

  get eventName(): string | null {
    let value = this.get("eventName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set eventName(value: string | null) {
    if (value === null) {
      this.unset("eventName");
    } else {
      this.set("eventName", Value.fromString(value as string));
    }
  }

  get currency(): string | null {
    let value = this.get("currency");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currency(value: string | null) {
    if (value === null) {
      this.unset("currency");
    } else {
      this.set("currency", Value.fromString(value as string));
    }
  }

  get shopUrl(): string | null {
    let value = this.get("shopUrl");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set shopUrl(value: string | null) {
    if (value === null) {
      this.unset("shopUrl");
    } else {
      this.set("shopUrl", Value.fromString(value as string));
    }
  }

  get imageUrl(): string | null {
    let value = this.get("imageUrl");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageUrl(value: string | null) {
    if (value === null) {
      this.unset("imageUrl");
    } else {
      this.set("imageUrl", Value.fromString(value as string));
    }
  }

  get startTime(): BigInt | null {
    let value = this.get("startTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt | null) {
    if (value === null) {
      this.unset("startTime");
    } else {
      this.set("startTime", Value.fromBigInt(value as BigInt));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (value === null) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(value as BigInt));
    }
  }

  get latitude(): BigDecimal | null {
    let value = this.get("latitude");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set latitude(value: BigDecimal | null) {
    if (value === null) {
      this.unset("latitude");
    } else {
      this.set("latitude", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get longitude(): BigDecimal | null {
    let value = this.get("longitude");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set longitude(value: BigDecimal | null) {
    if (value === null) {
      this.unset("longitude");
    } else {
      this.set("longitude", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

import type { SortableLinkKey } from "../types/sorteable-link-key.type";
import type { BaseHeader } from "./base-header.interface";

export interface SortableHeader extends BaseHeader {
  sortable: true;
  key: SortableLinkKey;
}

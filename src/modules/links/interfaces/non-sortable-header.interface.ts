import type { BaseHeader } from "./base-header.interface";

export interface NonSortableHeader extends BaseHeader {
  sortable: false;
  key?: never;
}
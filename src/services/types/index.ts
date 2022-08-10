export interface ContactInput {
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}
export interface Contact {
  id: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

export interface Contacts extends Array<Contact> {}

import {writable} from 'svelte/store';

export interface Session{
    token: String | null,
    username: String | null,
    permissions: String[]
}

let defaultSession: Session = {
  token: null,
  username: null,
  permissions: []
}

export const session = writable<Session>(undefined)

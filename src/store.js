import { writable } from 'svelte/store';

import { io } from "socket.io-client";

export const qData = writable();

export const gData = writable();

export const gameData = writable();

export const socket = io();
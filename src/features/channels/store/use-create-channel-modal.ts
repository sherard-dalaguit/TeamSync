import { atom, useAtom } from "Jotai";

const modalState = atom(false);

export const useCreateChannelModal = () => {
  return useAtom(modalState)
}
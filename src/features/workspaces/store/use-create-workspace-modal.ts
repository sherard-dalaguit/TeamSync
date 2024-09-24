import { atom, useAtom } from "Jotai";

const modalState = atom(false);

export const useCreateWorkspaceModal = () => {
  return useAtom(modalState)
}
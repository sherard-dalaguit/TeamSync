"use client";

import {Provider} from "Jotai";
import React from "react";

interface JotaiProviderProps {
	children: React.ReactNode;
}

export const JotaiProvider = ({ children }: JotaiProviderProps) => {
	return (
		<Provider>
			{children}
		</Provider>
	)
}
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
//This is shadCN typescript file which help us create Dynamic Classes inside the Tailwind //

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

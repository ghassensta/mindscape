// Plus tard tu remplaces les mocks par des appels backend (fetch).
import { mockReframe, mockWorld, mockResources } from "./mock";

export async function reframeThought(text) {
  // return fetch("/api/reframe", {method:"POST", ...})
  return mockReframe(text);
}

export async function generateWorld({ bias, mood }) {
  return mockWorld(bias, mood);
}

export async function getResources({ bias }) {
  return mockResources(bias);
}

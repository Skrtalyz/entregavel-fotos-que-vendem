
export interface PromptForm {
  productType: string;
  style: string;
  scenario: string;
  colors: string;
  photoType: string;
  mood: string;
}

export interface LibraryItem {
  category: string;
  name: string;
  description: string;
  specs: string;
  prompt: string;
  image: string;
}

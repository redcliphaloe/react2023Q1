export interface FormsFormData {
  id: number;
  photo: string;
  name: string;
  sex: string;
  birthDate: string;
  continent: string;
}

export interface HomeCardData {
  id: string;
  description: string;
  alt_description: string;
  urls: { regular: string };
  likes: number;
  user: { name: string };
}

export interface HomeFetchData {
  total: number;
  total_pages: number;
  results: HomeCardData[];
  errors: string[];
  message: string;
  photos: {
    photo: { id: string; title: string }[];
  };
}

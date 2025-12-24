const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface CarFile {
  id: number;
  fileName: string;
  url: string;
  carId?: number;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  gearbox: string;
  engine: number;
  powerValue: number;
  isSold?: boolean;
  files: CarFile[];
  promo?: boolean;
}

export const getFileUrl = (file: CarFile): string => {
  if (file.url?.startsWith('http')) {
    return file.url;
  }
  return `${API_URL}/${file.fileName || file.url}`;
};

export const getCars = async (params?: { limit?: number; offset?: number }) => {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.offset) queryParams.append('offset', params.offset.toString());

  const response = await fetch(`${API_URL}/car?${queryParams}`, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) throw new Error('Failed to fetch cars');
  return response.json() as Promise<Car[]>;
};




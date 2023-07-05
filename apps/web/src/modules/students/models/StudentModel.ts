export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  domain: string;
  company: {
    name: string;
  };
}


export interface UserTypeDto {
  isActive: boolean;
  userTypeCode: string;
  name: string;
  description: string;
  isAdmin: boolean;
  isTechnical: boolean;
}

export interface UserAppDto {
  isActive: boolean;
  userAppId: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  userType: UserTypeDto;
}
